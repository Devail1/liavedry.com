import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertCodeBlock,
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
      <CreateLink />
    </>
  );
}

export default ToolbarContents;
