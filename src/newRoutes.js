import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Details from "./pages/details";
import EditContact from "./pages/editContact";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import Login from "./pages/login";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/contact",
        children: [
          {
            index: true,
            element: <Contact />,
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <EditContact />,
              },
              {
                path: "details",
                element: <div>this the detils page </div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default routes;
