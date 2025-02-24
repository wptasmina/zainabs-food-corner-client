
import { createBrowserRouter } from "react-router-dom";

import MainLayout from './../Layout/MainLayout';

import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Contact from "../Pages/Contact";
import Dashbord from "../Pages/Dashbord";
import Our_Menu from "../Pages/Our_Menu";
import Our_Shop from "../Pages/Our_Shop";
import Login from "../Login/Login";


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
        path: "/our-Shop",
        element: <Our_Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);