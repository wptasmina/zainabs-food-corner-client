
import { createBrowserRouter } from "react-router-dom";

import MainLayout from './../Layout/MainLayout';

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Contact from "../Pages/Contact";
import Dashbord from "../Pages/Dashbord";
import Our_Menu from './../Pages/Our-Menu/Our_Menu';
import Our_Shop from "../Pages/OrderFood";
import Login from "../Login/Login";
import OrderFood from "../Pages/OrderFood";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/our-Menu",
        element: <Our_Menu />,
      },
      {
        path: "/order",
        element: <OrderFood />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);