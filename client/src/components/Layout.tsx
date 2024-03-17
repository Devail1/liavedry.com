import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container max-w-5xl px-10 mx-auto  grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
