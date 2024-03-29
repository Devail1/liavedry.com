import React, { ReactNode } from "react";

function Alert({ children }: { children: ReactNode }) {
  return (
    <div className="warn-alert mb-2 mt-10 flex w-full flex-row items-center rounded border-s-4 px-4">
      <div className="h-full">
        <svg
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 flex-shrink-0 fill-none stroke-red-400/80 stroke-2"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      </div>
      <div className="divider divider-horizontal w-px before:w-px after:w-px" />
      <div className="h-full flex-grow">
        <p className="warn-alert-text my-0 text-sm">{children}</p>
      </div>
    </div>
  );
}

export default Alert;
