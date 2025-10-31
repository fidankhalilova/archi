import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Featured/Pages/Home";
import Checkout from "./Featured/Pages/Checkout";
import About from "./Featured/Pages/About";
import Orders from "./Featured/Pages/Orders";
import Shop from "./Featured/Pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
