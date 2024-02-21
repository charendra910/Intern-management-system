import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HomeLayout from "../pages/HomeLayout";
import ProfileComponent from "../shared/Profile.Component";
import Department from "../components/department/department";
import Login from "../pages/Login";
import PrivateRoute from "../pages/PrivateRoute";
import NotFound from "../pages/NotFound";
import Admin from "../pages/Admin";
import Intern from "../pages/Intern";
import Event from "../pages/Event";
import Salary from "../pages/Salary";
import Certificate from "../pages/Certificate";
import Task from "../pages/Task";
import Leave from "../pages/Leave";
import GenerateCertificate from "../pages/GenerateCertificate";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/user-profile",
        element: <ProfileComponent />,
      },
      {
        path: "/intern",
        element: <Intern />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/salary",
        element: <Salary />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/leave",
        element: <Leave />,
      },
      {
        path: "/generate-certificate",
        element: <GenerateCertificate />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
