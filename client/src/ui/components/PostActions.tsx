import React from "react";

function PostActions({ isEditing, editorRef, onEdit, onCancel }: any) {
  return (
    <div className="mb-4">
      {isEditing ? (
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-success btn-sm mr-auto justify-start"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() =>
              editorRef.current?.getMarkdown() &&
              console.log(editorRef.current.getMarkdown())
            }
            className="btn btn-primary btn-sm "
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-error btn-sm "
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={onEdit}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default PostActions;
