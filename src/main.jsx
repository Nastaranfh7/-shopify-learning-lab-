import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <h1 className="text-3xl">Welcome to Shopify Learning Lab</h1> },
      { path: "polaris", element: <h2 className="text-xl">Polaris Section</h2> },
      { path: "api", element: <h2 className="text-xl">API Section</h2> },
      { path: "webhooks", element: <h2 className="text-xl">Webhooks Section</h2> },
      { path: "structure", element: <h2 className="text-xl">App Structure Section</h2> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
