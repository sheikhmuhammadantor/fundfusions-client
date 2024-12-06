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
        element: <AllCampaign />,
        loader: () => fetch('http://localhost:3000/campaigns')
      },
      {
        path: '/campaign/:id',
        element: <PrivateRoutes><Details /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/campaign/${params.id}`)
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
        element: <PrivateRoutes><MyDonations /></PrivateRoutes>,
        // loader: () => fetch('http://localhost:3000/myDonations')
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
