import { createBrowserRouter } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/common/layout/root-layout";

import Login from "@/pages/login";
import SignUp from "@/pages/sign-up";
import Queues from "@/pages/queues";
import Dashboard from "@/pages/dashboard";
import QueueDetails from "@/pages/queue-details";
import Settings from "@/pages/settings";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Queues />,
          },
          { path: "/queues/:id", element: <QueueDetails /> },
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
