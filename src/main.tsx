import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Layout from "./layout";
import Title from "./title";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Title/>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
