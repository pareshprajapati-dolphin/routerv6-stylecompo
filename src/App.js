import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Component/Layout";
import About from "./pages/about";
import Service from "./pages/services";
import Contact from "./pages/contact/contact";
import CreateAccount from "./pages/create-account";
import Details from "./pages/details";
import EditContact from "./pages/editContact";
import ErrorPage from "./pages/errorPage";

import Home from "./pages/home";
import Login from "./pages/login/login";
import GlobalStyles from "./style/GlobalStyle";
import { store } from "./redux/store";
import User from "./pages/user";
import EditUser from "./pages/user/editUser";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
    disabled: "#707070",
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
      path: "*",
      element: <ErrorPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          path: "user",
          children: [
            {
              index: true,
              element: <User />,
            },
            {
              path: ":id",
              element: <EditUser />,
            },
          ],
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {element}
        </ThemeProvider>
      </Provider>
      <ToastContainer position="top-right" autoClose={2000} closeOnClick />
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
