import { useEffect } from "react";
import { Outlet, useMatches, useLocation } from "react-router-dom";
import Nav from "../components/layout/nav/Nav";
import Footer from "../components/layout/footer/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from "react-responsive";

export default function MainLayout() {
  const matches = useMatches();
  const location = useLocation();

  useEffect(() => {
    const meta = matches[matches.length - 1]?.handle?.meta;
    document.title = meta?.title || "Portfolio";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [matches]);

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {isLargeScreen ? (
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex-grow"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      ) : (
        <main className="flex-grow">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
}