import "./styles/theme.css";
import "./styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { Overview } from "./views/Overview/Overview.jsx";
import { Transactions } from "./views/Transactions/Transactions.jsx";
import { Budgets } from "./views/Budgets/Budgets.jsx";
import { Pots } from "./views/Pots/Pots.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/overview" /> },
      { path: "/overview", element: <Overview /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/budgets", element: <Budgets /> },
      { path: "/pots", element: <Pots /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
