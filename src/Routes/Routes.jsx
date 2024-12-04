import { createBrowserRouter } from "react-router-dom";
import { AddCampaign, AllCampaign, Details, ErrorPage, Home, Login, MainLayout, MyCampaign, MyDonations, Register, UpdateCampaign } from "../App";
import PrivateRoutes from "./PrivateRoutes";

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
        path: '/addCampaign',
        element: <PrivateRoutes><AddCampaign /></PrivateRoutes>
      },
      {
        path: '/campaigns',
        element: <AllCampaign />
      },
      {
        path: '/campaign/:id',
        element: <PrivateRoutes><Details /></PrivateRoutes>
      },
      {
        path: '/myCampaign',
        element: <PrivateRoutes><MyCampaign /></PrivateRoutes>
      },
      {
        path: '/updateCampaign/:id',
        element: <UpdateCampaign />
      },
      {
        path: '/myDonations',
        element: <PrivateRoutes><MyDonations /></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
]);
