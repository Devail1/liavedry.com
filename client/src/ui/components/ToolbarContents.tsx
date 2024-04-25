import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertThematicBreak,
  ListsToggle,
  UndoRedo,
} from "@mdxeditor/editor";
import React from "react";

function ToolbarContents() {
  return (
    <>
      <UndoRedo />
      <BoldItalicUnderlineToggles />
      <BlockTypeSelect />
      <InsertThematicBreak />
      <ListsToggle />
      <InsertImage />
      <InsertCodeBlock />
      <InsertFrontmatter />
      <CreateLink />
    </>
  );
}

export default ToolbarContents;
