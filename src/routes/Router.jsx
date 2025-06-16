// src/routes/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      ...routesConfig
    ]
  }
]);