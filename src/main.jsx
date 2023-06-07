import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { Home } from "./pages/Home/Index";
import { Login } from "./pages/Login/Index";
import { PostId } from "./pages/PostId/Index";
import { PostList } from "./pages/PostList/Index";
import { Register } from "./pages/Register/Index";
import GlobalStyle from "./styles/global.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/category/:id",
        element: <PostList />,
      },
      {
        path: "/post/categoryId/:id",
        element: <PostId />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>
);
