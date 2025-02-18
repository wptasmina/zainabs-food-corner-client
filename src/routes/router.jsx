
import { createBrowserRouter } from "react-router-dom";

import MainLayout from './../Layout/MainLayout';
import Home from './../Pages/Home';
import ErrorPage from "../Pages/ErrorPage";


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
    ],
  },
]);