import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/contact/Contact.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/Projects/Projects.tsx";
import { Toaster } from "react-hot-toast";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <Toaster />
  </React.StrictMode>
);
