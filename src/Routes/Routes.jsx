import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, MainLayout } from "../App";

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
    ]
  },
]);
