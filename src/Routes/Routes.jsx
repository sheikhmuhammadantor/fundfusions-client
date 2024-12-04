import { createBrowserRouter } from "react-router-dom";
import { AddCampaign, AllCampaign, Details, ErrorPage, Home, Login, MainLayout, MyCampaign, MyDonations, Register, UpdateCampaign } from "../App";

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
        element: <AddCampaign />
      },
      {
        path: '/campaigns',
        element: <AllCampaign />
      },
      {
        path: '/campaign/:id',
        element: <Details />
      },
      {
        path: '/myCampaign',
        element: <MyCampaign />
      },
      {
        path: '/updateCampaign/:id',
        element: <UpdateCampaign />
      },
      {
        path: '/myDonations',
        element: <MyDonations />
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
