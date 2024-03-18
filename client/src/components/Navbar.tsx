import React, { useState } from "react";
import Link from "next/link";
import ThemeController from "./ThemeController";
import SearchInput from "./SearchInput";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="w-full mt-2">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
          {/* <Dropdown /> */}
        </div>
        <div className="navbar-center ">
          <div className="form-control hidden md:flex">
            <label
              htmlFor="desktopSearch"
              className="input input-bordered input-md !outline-none flex items-center gap-2"
            >
              <input type="text" placeholder="Search" id="desktopSearch" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-end">
          <SearchInput isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
          <ThemeController />
        </div>
      </div>
      <div className="divider px-4 my-0" />
    </div>
  );
}

export default Navbar;
