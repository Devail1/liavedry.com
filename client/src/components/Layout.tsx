import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/themeSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
