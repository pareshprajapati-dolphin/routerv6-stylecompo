// import React from "react";
// import { useRoutes } from "react-router-dom";
// import Layout from "../Component/Layout";
// import About from "./about";
// import Contact from "./contact/contact";
// import EditContact from "./contact/editContact";
// import CreateAccount from "./create-account";
// import Details from "./details";
// import ErrorPage from "./errorPage";
// import Home from "./home";
// import Login from "./login/login";
// import Service from "./services";
// import User from "./user";
// import AddUser from "./user/addUser";
// import EditUser from "./user/editUser";

// export default function RouterElement() {
//   return (element = useRoutes([
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/create-account",
//       element: <CreateAccount />,
//     },
//     {
//       path: "*",
//       element: <ErrorPage />,
//     },
//     {
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//           path: "service",
//           // element: <Service />,
//           children: [
//             {
//               index: true,
//               element: <Service />,
//             },
//             {
//               path: "newservice",
//               element: <div> This the new service </div>,
//             },
//             {
//               path: "editservice",
//               element: <div> This the edit service </div>,
//             },
//           ],
//         },
//         {
//           path: "details",
//           element: <Details />,
//         },
//         {
//           path: "user",
//           children: [
//             {
//               index: true,
//               element: <User />,
//             },
//             {
//               path: "adduser",
//               element: <AddUser />,
//             },
//             {
//               path: "slug=:id",
//               element: <EditUser />,
//             },
//           ],
//         },
//         {
//           path: "contact",
//           children: [
//             {
//               index: true,
//               element: <Contact />,
//             },
//             {
//               path: "addcontact",
//               element: <div>this the add contact page </div>,
//             },
//             {
//               path: ":id",
//               children: [
//                 {
//                   index: true,
//                   element: <EditContact />,
//                 },
//                 // {
//                 //   path: "details",
//                 //   element: <div>this the detils page </div>,
//                 // },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ]));
// }
