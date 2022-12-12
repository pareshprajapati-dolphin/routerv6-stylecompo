import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./Component/Layout";
import About from "./pages/about";
import Service from "./pages/services";
import Contact from "./pages/contact";
import CreateAccount from "./pages/create-account";
import Details from "./pages/details";
import EditContact from "./pages/editContact";
import ErrorPage from "./pages/errorPage";

import Home from "./pages/home";
import Login from "./pages/login/login";
import GlobalStyles from "./style/GlobalStyle";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
    disabled: "skyblue",
    bg: "rgb(249 249 255)",
  },
  mobile: "768px",
};

function App() {
  let element = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "details",
          element: <Details />,
        },
        {
          path: "contact",
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
      <ToastContainer position="top-center" autoClose={2000} closeOnClick />
    </>
  );

  // return (
  //   <div className="App">
  //     <div style={{ paddingTop: "20px" }}>
  //       {/* <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/contact">
  //         <Route index element={<Contact />} />
  //         <Route path=":id">
  //         <Route index element={<EditContact />} />
  //         <Route
  //         path="details"
  //         element={<div>this the details page</div>}
  //         />
  //         </Route>
  //       </Route>{" "} */}

  //     </div>
  //   </div>
  // );
}

export default App;
