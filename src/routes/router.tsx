import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/Layout/Layout";
import QueuesPage from "../components/pages/QueuesPage";
import DashboardPage from "../components/pages/DashboardPage";
import SettingsPage from "../components/pages/SettingsPage";
import QueueDetailsPage from "../components/pages/QueueDetailsPage";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";

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
            element: <QueuesPage />,
          },
          { path: "/queues/:id", element: <QueueDetailsPage /> },
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/settings", element: <SettingsPage /> },
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
