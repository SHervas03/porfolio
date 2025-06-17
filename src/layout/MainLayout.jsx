import { useEffect } from "react";
import { Outlet, useMatches } from "react-router-dom";
import Nav from "../components/layout/nav/Nav";
import Footer from "../components/layout/footer/Footer";

export default function MainLayout() {
  const matches = useMatches();
  
  useEffect(() => {
    const meta = matches[matches.length - 1]?.handle?.meta;
    document.title = meta?.title || "Portfolio";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [matches]);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}