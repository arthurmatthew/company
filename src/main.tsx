import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Layout from "./layout";
import Title from "./title";
import Account from "./routes/account/account";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      {/* <Title/> */}
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
