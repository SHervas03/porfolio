import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ProjectsCompleted from "../pages/projects/Completed";
import ProjectsInProgress from "../pages/projects/InProgress";
import ProjectsFuture from "../pages/projects/Future";
import Maintenance from "../pages/Maintenance";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
    meta: {
      title: "Inicio | Portfolio",
      navName: "Inicio",
      shortName: "🏠 Inicio",
      showInNav: true
    }
  },
  {
    path: "/sobre-mi",
    element: <About />,
    meta: {
      title: "Sobre mí | Portfolio",
      navName: "Sobre mí",
      shortName: "🧑‍💻 Sobre mí",
      showInNav: true
    }
  },
  {
    path: "/experiencia",
    element: <Experience />,
    meta: {
      title: "Experiencia | Portfolio",
      navName: "Experiencia",
      shortName: "📈 Experiencia",
      showInNav: true
    }
  },
  {
    path: "/proyectos",
    element: <Projects />,
    meta: {
      title: "Proyectos | Portfolio",
      navName: "Proyectos",
      shortName: "🛠 Proyectos",
      showInNav: true,
      isDropdown: true
    },
    children: [
      {
        path: "realizados",
        element: <ProjectsCompleted />,
        meta: {
          title: "Proyectos Realizados | Portfolio",
          navName: "Realizados",
          shortName: "✅ Realizados"
        }
      },
      {
        path: "en-proceso",
        element: <ProjectsInProgress />,
        meta: {
          title: "Proyectos en Proceso | Portfolio",
          navName: "En proceso",
          shortName: "🔄 En proceso"
        }
      },
      {
        path: "a-futuro",
        element: <ProjectsFuture />,
        meta: {
          title: "Proyectos a Futuro | Portfolio",
          navName: "A futuro",
          shortName: "🔮 A futuro"
        }
      }
    ]
  },
  {
    path: "/contacto",
    element: <Maintenance />,
    meta: {
      title: "Contacto | Portfolio",
      navName: "Contacto",
      shortName: "📩 Contacto",
      showInNav: true
    }
  }
];