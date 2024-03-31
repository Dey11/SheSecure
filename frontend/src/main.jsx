import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/userContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Layout from "./components/Layout.jsx";
import { SocketProvider } from "./context/socketContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    children: [
      { index: true, element: <Dashboard /> },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <SocketProvider>
        <RouterProvider router={router} />
      </SocketProvider>
    </UserProvider>
  </React.StrictMode>
);
