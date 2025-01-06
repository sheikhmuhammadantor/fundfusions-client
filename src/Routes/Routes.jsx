import { createBrowserRouter } from "react-router-dom";
import { AboutUs, AddCampaign, AllCampaign, Contact, Details, ErrorPage, Home, Login, MainLayout, MyCampaign, MyDonations, Register, Support, UpdateCampaign } from "../App";
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
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/support',
        element: <Support />,
      },
      {
        path: '/campaigns',
        element: <AllCampaign />,
      },
      {
        path: '/addCampaign',
        element: <PrivateRoutes><AddCampaign /></PrivateRoutes>
      },
      {
        path: '/campaign/:id',
        element: <PrivateRoutes><Details /></PrivateRoutes>,
        // loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/campaign/${params.id}`)
      },
      {
        path: '/myCampaign',
        element: <PrivateRoutes><MyCampaign /></PrivateRoutes>
      },
      {
        path: '/updateCampaign/:id',
        element: <PrivateRoutes><UpdateCampaign /></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/campaign/${params.id}`)
      },
      {
        path: '/myDonations',
        element: <PrivateRoutes><MyDonations /></PrivateRoutes>,
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
