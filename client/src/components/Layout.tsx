import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { selectTheme } from "@/redux/themeSlice";
import { useSelector } from "react-redux";

function Layout({ children }: { children: ReactNode }) {
  const currentTheme = useSelector(selectTheme);

  return (
    <div data-theme={currentTheme} className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container max-w-5xl px-10 mx-auto  grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
