import { createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";

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
  },{
    path: "*",
    element: <NotFound />,
    meta: {
      title: "Página no encontrada | Portfolio",
      showInNav: false
    }
  }
]);