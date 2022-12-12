// import React from "react";

const routes = [
  {
    enabled: true,
    path: "/",
    navbar: "Home",
  },
  {
    enabled: true,
    path: "/about",
    navbar: "About",
  },
  {
    enabled: true,
    path: "/service",
    navbar: "Service",
  },
  {
    enabled: true,
    path: "/contact",
    navbar: "Contact",
  },
  {
    enabled: true,
    path: "/details",
    navbar: "details",
  },
  // {
  //   enabled: true,
  //   path: "/login",
  //   navbar: "Signin",
  // },
];

export default routes.filter((route) => route.enabled);
