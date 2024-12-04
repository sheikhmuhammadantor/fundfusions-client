import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, MainLayout } from "../App";
import Users from "../Pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/user',
        element: <Users></Users>
      }
    ]
  },
]);
