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
} from "@mdxeditor/editor";
import { selectTheme } from "@/redux/features/themeSlice";
import { useSelector } from "react-redux";
import ToolbarContents from "./ToolbarContents";

function Editor({ ref, markdown }) {
  const theme = useSelector(selectTheme);

  return (
    <MDXEditor
      ref={ref}
      onChange={console.log}
      contentEditableClassName="prose"
      markdown={markdown}
      plugins={[
        codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            html: "HTML",
            bash: "Bash",
            json: "JSON",
            yaml: "YAML",
            jsx: "JSX",
            js: "JavaScript",
            css: "CSS",
            txt: "Plain Text",
            tsx: "TypeScript",
            "": "Unspecified",
          },
          theme,
        }),
        toolbarPlugin({
          toolbarContents: ToolbarContents,
        }),
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
