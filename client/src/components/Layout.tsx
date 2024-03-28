import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/features/themeSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  const currentTheme = useSelector(selectTheme);

  return (
    <div data-theme={currentTheme} className="flex min-h-screen flex-col">
      <div className="container mx-auto max-w-3xl grow">
        <Navbar />
        <main className="min-h-layout grow px-6 md:px-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
