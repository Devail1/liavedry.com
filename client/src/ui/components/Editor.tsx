import {
  MDXEditor,
  codeBlockPlugin,
  headingsPlugin,
  listsPlugin,
  linkPlugin,
  quotePlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  imagePlugin,
  codeMirrorPlugin,
  frontmatterPlugin,
} from "@mdxeditor/editor";
import { selectTheme } from "@/redux/features/themeSlice";
import { useSelector } from "react-redux";
import ToolbarContents from "./ToolbarContents";

function Editor({ ref, markdown, onChange }) {
  const theme = useSelector(selectTheme);

  return (
    <MDXEditor
      ref={ref}
      onChange={onChange}
      contentEditableClassName="prose"
      markdown={markdown}
      plugins={[
        codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            javascript: "javascript",
            html: "html",
            bash: "bash",
            json: "json",
            yaml: "yaml",
            jsx: "jsx",
            css: "css",
            txt: "txt",
            tsx: "typeScript",
            "": "unspecified",
          },
          theme,
        }),
        toolbarPlugin({
          toolbarContents: ToolbarContents,
        }),
        frontmatterPlugin(),
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        imagePlugin(),
      ]}
    />
  );
}

export default Editor;
