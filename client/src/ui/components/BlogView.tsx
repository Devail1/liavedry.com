import { selectIsLoggedIn } from "@/redux/features/authSlice";
import { useUpdatePostMutation } from "@/redux/services/postsApi";
import { TPost } from "@/types";
import { formatDate, serializeMarkdown } from "@/utils";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { Suspense, useRef, useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import PostActions from "./PostActions";
import useMDXComponents from "./mdx-components";

const Editor = dynamic(() => import("@/ui/components/Editor"), { ssr: false });

function BlogView({
  post,
  mdxSource,
}: {
  post: TPost;
  mdxSource: MDXRemoteSerializeResult;
}) {
  const [updatePost, { isLoading, error: updateError }] =
    useUpdatePostMutation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [source, setSource] = useState<MDXRemoteSerializeResult>(mdxSource);
  const [markdown, setMarkdown] = useState(post?.content);
  const [editMode, setEditMode] = useState<"edit" | "preview" | null>(null);

  const ref = useRef<MDXEditorMethods>(null);

  const handleEdit = () => {
    setEditMode("edit");
  };

  const updateSource = async (content: string) => {
    const editedSource = await serializeMarkdown(content);
    setSource(editedSource);
  };

  const handleCancel = () => {
    if (editMode === "edit") {
      setMarkdown(post?.content);
      updateSource(post?.content);
      setEditMode(null);
    } else if (editMode === "preview") {
      setEditMode("edit");
    }
  };

  const handlePreview = () => {
    setEditMode("preview");
    updateSource(markdown);
  };

  const handleSave = () => {
    try {
      updatePost({
        id: post.id,
        data: {
          ...post,
          content: markdown,
        },
      });

      if (!updateError) {
        updateSource(markdown);
        setEditMode(null);
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const date = formatDate(post?.createdAt);

  return (
    <Suspense fallback={<>Loading...</>}>
      {isLoggedIn && (
        <PostActions
          isEditing={editMode === "edit"}
          isPreviewing={editMode === "preview"}
          isLoading={isLoading}
          onSave={handleSave}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onPreview={handlePreview}
        />
      )}
      {editMode === "edit" ? (
        <Editor ref={ref} markdown={markdown} onChange={setMarkdown} />
      ) : (
        <article className="prose pb-8 lg:prose-xl prose-a:font-normal prose-a:text-blue-400 prose-img:my-0">
          <h1 className="prose !mb-0 text-2xl font-semibold md:text-3xl lg:text-4xl">
            {source.frontmatter?.title as string}
          </h1>
          <p className="prose mt-1 md:!mt-2">{date}</p>
          <MDXRemote {...source} components={useMDXComponents} />
        </article>
      )}
    </Suspense>
  );
}

export default BlogView;
