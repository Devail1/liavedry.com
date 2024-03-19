import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/themeSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  const currentTheme = useSelector(selectTheme);

  return (
    <div data-theme={currentTheme} className="flex flex-col min-h-screen">
      <div className="container max-w-3xl grow mx-auto">
        <Navbar />
        <main className="px-6 md:px-4 pt-2 pb-4 grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
