import { ReactNode, useRef, useState } from "react";
import { MDXEditor } from "@mdxeditor/editor";
import MDXContent from "../../mock/mdx-content.mdx";

export default function MDXPage({ children }: { children: ReactNode }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = async () => {
    setEditing(false);
  };

  return (
    <div className="prose lg:prose-xl prose-img:rounded-xl prose-img:my-0 prose-a:text-blue-400">
      <div>
        <button type="button" onClick={handleEdit}>
          {editing ? "Cancel" : "Edit"}
        </button>
        {editing ? <MDXEditor markdown="Hello world" ref={ref} /> : <MDXContent />}
        {editing && (
          <button type="button" onClick={handleSave}>
            Save
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
