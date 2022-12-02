import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Details from "./pages/details";
import EditContact from "./pages/editContact";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  let element = useRoutes([
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
          path: "/login",
          element: <Login />,
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

  return element;

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
  //       {/* <Routes>
  //         {routes.map((router, idx) => (
  //           <>
  //             <Route path={router.path} element={router.component} key={idx} />
  //             {router?.child &&
  //               router.child.map((c, i) => (
  //                 <Route path={c.path} element={c.component} key={i} />
  //               ))}
  //           </>
  //         ))}
  //       </Routes> */}
  //     </div>
  //   </div>
  // );
}

export default App;
