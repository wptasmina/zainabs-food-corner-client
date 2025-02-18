import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { router } from "./Routes/router.jsx";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HelmetProvider>
      <RouterProvider router={router} /> 
      <ToastContainer position="top-center" />
   </HelmetProvider>
</StrictMode>
);
