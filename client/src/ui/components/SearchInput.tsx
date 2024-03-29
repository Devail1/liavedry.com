import clsx from "clsx";
import React, { useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

function SearchInput({ isOpen, setIsOpen }) {
  const searchRef = useRef(null);
  const toggleSearch = () => setIsOpen((prev) => !prev);

  const handleClickOutsideSearch = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useOnClickOutside(searchRef, handleClickOutsideSearch);

  return (
    <div className="md:hidden">
      <div ref={searchRef} className="form-control">
        <label
          htmlFor="mobileSearch"
          className={clsx(
            "z-10 mr-1 flex origin-right items-center pr-0 !outline-none",
            isOpen && "input input-bordered"
          )}
        >
          {isOpen && (
            <input
              id="mobileSearch"
              type="text"
              className="w-full grow origin-right animate-expand"
              placeholder="Search"
            />
          )}
          <button
            type="button"
            className="btn btn-circle btn-ghost btn-md mr-1 md:hidden"
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </label>
      </div>
    </div>
  );
}

export default SearchInput;
