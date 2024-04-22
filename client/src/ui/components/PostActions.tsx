import React from "react";

function PostActions({
  isEditing,
  isPreviewing,
  onEdit,
  onSave,
  onCancel,
  onPreview,
}: any) {
  return (
    <div className="mb-4">
      {isEditing || isPreviewing ? (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPreview}
            disabled={isPreviewing}
            className="btn btn-success btn-sm mr-auto justify-start"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={onSave}
            className="btn btn-primary btn-sm "
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-error btn-sm "
            onClick={onCancel}
          >
            {`Cancel ${isEditing ? "Edit" : "Preview"}`}
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
