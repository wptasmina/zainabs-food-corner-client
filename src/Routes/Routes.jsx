import {
    createBrowserRouter
  } from "react-router-dom";

import MainLayout from './../Layout/MainLayout';
import Home from "../Pages/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
      ],
    },
  ]);