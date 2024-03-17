import useOnClickOutside from "@/hooks/useOnClickOutside";
import clsx from "clsx";
import React, { useRef } from "react";

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
            "z-10 pr-0 !outline-none flex items-center origin-right mr-1",
            isOpen && "input input-bordered"
          )}
        >
          {isOpen && (
            <input
              id="mobileSearch"
              type="text"
              className="grow animate-expand origin-right w-full"
              placeholder="Search"
            />
          )}
          <button
            type="button"
            className="btn btn-ghost btn-md btn-circle md:hidden mr-1"
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
