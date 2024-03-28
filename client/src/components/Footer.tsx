import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 p-4">
      <aside>
        <Link href="/api/hello" className="link mt-2 no-underline">
          <p>Copyright © 2024 - All right reserved.</p>
        </Link>
      </aside>
    </footer>
  );
}

export default Footer;
