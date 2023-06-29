import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { AllPosts } from "./pages/AllPosts/AllPosts";
import { CreateBlogPost } from "./pages/CreateBlogPost/CreateBlogPost";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { PostId } from "./pages/PostId/PostId";
import { PostList } from "./pages/PostList/PostList";
import { Register } from "./pages/Register/Register";
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
    path: "/post/createblog",
    element: <CreateBlogPost />,
  },
  {
    path: "/post/allposts",
    element: <AllPosts />,
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
