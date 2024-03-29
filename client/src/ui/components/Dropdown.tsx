import React, { useRef } from "react";
import Link from "next/link";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

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
        <ul className="z-10 rounded-t-none bg-base-100 p-2">
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
