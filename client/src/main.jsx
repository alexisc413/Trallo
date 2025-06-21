import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Trips from "./components/Trips";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
//import { GoogleOAuthProvider } from "@react-oauth/google";
import Calculator from "./components/Calculator";
import Breakdown from "./components/Breakdown";
import "./index.css";
import Dashboard from "./components/Dashboard";

// Use Vite supports to hide this for deploying
//const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //Makes the Landing Page the starting tab.
        path: "/",
        element: <LandingPage />,
      },
      // {
      //   path: "/login",
      //   element: <GoogleOAuthProvider clientId={CLIENT_ID}><LoginPage /></GoogleOAuthProvider>,
      // },
      {
        path: "/trips",
        element: <Trips />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home-page",
        element: <HomePage />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/breakdown",
        element: <Breakdown />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
