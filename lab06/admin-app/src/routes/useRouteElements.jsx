import React from "react";
import { useRoutes } from "react-router-dom";
import { path } from "../constants/path";
import Layout from "../layout/Layout";
import DashBoard from "../pages/DashBoard/DashBoard";
import Projects from "../pages/Projects/Projects";
import Teams from "../pages/Teams/Teams";
import Analytics from "../pages/Analytics/Analytics";
import Messages from "../pages/Messages/Messages";
import Integrations from "../pages/Integrations/Integrations";

export default function useRouteElements() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: path.dashboard,
          element: <DashBoard />,
        },
        {
          path: path.projects,
          element: <Projects />,
        },
        {
          path: path.teams,
          element: <Teams />,
        },
        {
          path: path.analytics,
          element: <Analytics />,
        },
        {
          path: path.messages,
          element: <Messages />,
        },
        {
          path: path.integrations,
          element: <Integrations />,
        },
      ],
    },
  ]);
  return element;
}
