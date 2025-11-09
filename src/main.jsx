import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./component/Root/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Banner from "./pages/Banner/Banner.jsx";
import Picture from "./pages/Picture/Picture.jsx";
import Rating from "./pages/Rating/Rating.jsx";
import Trendingapp from "./pages/Trending/Trendingapp.jsx";
import Appdetails from "./pages/App details/Appdetails.jsx";
import Error from "./pages/Error/Error.jsx";
import Installapp from "./pages/Installapp/Installapp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,

    children: [
      {
        index: true,
        path: "/",
        loader:()=>fetch('/topapp.json'),
        Component: Home,
      },
      
      {
        path: "/banner",
        Component: Banner,
      },
      {
        path: "/picture",
        Component: Picture,
      },
      {
        path: "/rating",
        Component: Rating,
      },
      {
        path: "/trending",
        Component: Trendingapp,
      },
      {
        path:"/appdetails/:id",
        loader:()=>fetch('/topapp.json'),
        Component:Appdetails,
      },
      {
        path:'/app',
        loader:()=>fetch('/newdata.json'),
        Component:App

      },
      {
        path:"/app/appdetails/:id",
        loader:()=>fetch('/newdata.json'),
        Component:Appdetails,
      },
      {
        path:"/install",
        loader:()=>fetch('/newdata.json'),
        Component:Installapp,
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
