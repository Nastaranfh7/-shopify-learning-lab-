import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "./index.css";

import PolarisCard from "./polaris/PolarisCard.jsx";
import PolarisPage from "./polaris/PolarisPage.jsx";
import PolarisLayout from "./polaris/PolarisLayout.jsx";
import PolarisButton from "./polaris/PolarisButton.jsx";
import PolarisForm from "./polaris/PolarisForm.jsx";
import PolarisIndexTable from "./polaris/PolarisIndexTable.jsx";
import PolarisCRUD from "./polaris/PolarisCRUD.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1 className="text-3xl">Welcome to Shopify Learning Lab</h1>,
      },

      // Polaris demos
      { path: "polaris", element: <PolarisPage /> },
      { path: "polaris/card", element: <PolarisCard /> },
      { path: "polaris/layout", element: <PolarisLayout /> },
      { path: "polaris/button", element: <PolarisButton /> },
      { path: "polaris/form", element: <PolarisForm /> },
      { path: "polaris/table", element: <PolarisIndexTable /> },

      // CRUD (تمام صفحات CRUD داخل PolarisCRUD مدیریت می‌شوند)
      { path: "/crud/*", element: <PolarisCRUD /> },


      // سایر بخش‌ها
      { path: "api", element: <h2 className="text-xl">API Section</h2> },
      { path: "webhooks", element: <h2 className="text-xl">Webhooks Section</h2> },
      { path: "structure", element: <h2 className="text-xl">App Structure Section</h2> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
