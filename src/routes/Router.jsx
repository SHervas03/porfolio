// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Rutas principales
      ...routesConfig.map(route => ({
        path: route.path,
        element: route.element,
        meta: route.meta,
        // Rutas hijas si existen
        ...(route.children && {
          children: route.children.map(childRoute => ({
            path: childRoute.path,
            element: childRoute.element,
            meta: childRoute.meta
          }))
        })
      }))
    ]
  }
]);