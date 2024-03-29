import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/features/themeSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }: { children: ReactNode }) {
  const currentTheme = useSelector(selectTheme);

  return (
    <div data-theme={currentTheme} className="min-h-screen">
      <div className="container mx-auto max-w-3xl grow">
        <Navbar />
        <main className="min-h-layout grow p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
