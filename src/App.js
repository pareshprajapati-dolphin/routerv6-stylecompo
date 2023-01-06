import { useLocation, useRoutes } from "react-router-dom";
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
import EditContact from "./pages/contact/editContact";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import Login from "./pages/login/login";
import GlobalStyles from "./style/GlobalStyle";
import { store } from "./redux/store";
import User from "./pages/user";
import EditUser from "./pages/user/editUser";
import AddUser from "./pages/user/addUser";
import { useEffect, useState } from "react";
import ProgessBar from "./Component/ProgessBar";

const theme = {
  colors: {
    header: "#f1f1f1",
    body: "#fff",
    footer: "#fff",
    disabled: "#707070",
    bg: "rgb(249 249 255)",
  },
  mobile: "768px",
};

function App() {
  const [progess, setProgess] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

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
          // element: <Service />,
          children: [
            {
              index: true,
              element: <Service />,
            },
            {
              path: "newservice",
              element: <div> This the new service </div>,
            },
            {
              path: "editservice",
              element: <div> This the edit service </div>,
            },
          ],
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
              path: "adduser",
              element: <AddUser />,
            },
            {
              path: "slug=:id",
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
              path: "addcontact",
              element: <div>this the add contact page </div>,
            },
            {
              path: ":id",
              children: [
                {
                  index: true,
                  element: <EditContact />,
                },
                // {
                //   path: "details",
                //   element: <div>this the detils page </div>,
                // },
              ],
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgess(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgess(false);
  }, [prevLoc]);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {progess && <ProgessBar />}
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
