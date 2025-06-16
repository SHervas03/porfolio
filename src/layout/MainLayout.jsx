// src/layout/MainLayout.jsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/layout/nav/Nav";
import Footer from "../components/layout/footer/Footer";
import { routesConfig } from "../routes/routesConfig";

export default function MainLayout() {
    const location = useLocation();

    useEffect(() => {
        const currentRoute = routesConfig.find(r => r.path === location.pathname);
        document.title = currentRoute?.meta?.title || "Portfolio";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

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