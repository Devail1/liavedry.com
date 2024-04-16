import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn } from "@/redux/features/authSlice";
import Link from "next/link";
import Socials from "./Socials";
import ThemeController from "./ThemeController";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="h-auto w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start ">
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-2 px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
          {/* <Dropdown /> */}
        </div>
        <div className="navbar-center ">
          {/* <div className="form-control hidden md:flex">
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
          </div> */}
        </div>
        <div className="navbar-end gap-1">
          {/* <SearchInput isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} /> */}
          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-ghost btn-md font-normal hover:bg-opacity-10"
            >
              Logout
            </button>
          ) : (
            <Socials />
          )}
          <ThemeController />
        </div>
      </div>
      <div className="divider my-0 h-auto px-4" />
    </div>
  );
}

export default Navbar;
