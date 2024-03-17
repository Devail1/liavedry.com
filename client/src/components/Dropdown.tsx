import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import React, { useRef } from "react";

function Dropdown() {
  const menuRef = useRef(null);

  const handleClickOutsideMenu = () => {
    if (menuRef.current.open) {
      menuRef.current.open = false;
    }
  };

  useOnClickOutside(menuRef, handleClickOutsideMenu);

  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <details ref={menuRef}>
            <summary>About</summary>
            <ul className="p-2 z-10 bg-base-100 rounded-t-none">
              <Link href="/">Blog</Link>
              <Link href="/">Projects</Link>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
