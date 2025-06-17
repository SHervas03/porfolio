import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routesConfig.map(route => ({
      path: route.path,
      element: route.element,
      handle: { meta: route.meta },
      ...(route.children && {
        children: route.children.map(childRoute => ({
          path: childRoute.path,
          element: childRoute.element,
          handle: { meta: childRoute.meta }
        }))
      })
    }))
  }
]);