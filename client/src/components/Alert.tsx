import React, { ReactNode } from "react";

function Alert({ children }: { children: ReactNode }) {
  return (
    <div
      role="alert"
      className="mt-4 sm:mt-10 mb-2 rounded border-s-4 warn-alert p-4 sm:flex sm:items-center sm:space-x-4"
    >
      <span className="warn-text-alert">
        <svg
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 flex-shrink-0 stroke-current stroke-2 fill-none"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      </span>
      <p className="mt-2 text-sm warn-alert-text">{children}</p>
    </div>
  );
}

export default Alert;
