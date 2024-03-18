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
    <li>
      <details ref={menuRef}>
        <summary>About</summary>
        <ul className="p-2 z-10 bg-base-100 rounded-t-none">
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
        </ul>
      </details>
    </li>
  );
}

export default Dropdown;
