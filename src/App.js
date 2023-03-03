import "./App.css";
import { LoginProvider } from "./ContextApi/LoginContext";
// import Footer from "./Views/Footer";
// import Header from "./Views/Header";
// import Home from "../src/";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Form from "./Components/habib-component/project05/Form";
// import HomePage from "./Components/habib-component/project01/pages/HomePage";
// import Single from "./Components/habib-component/project01/pages/Single";
// import PageOne from "./Components/habib-component/project03/PageOne";
// import Dashboard from "./Components/habib-component/project04/Dashboard";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <HomePage />,
      // },
      // {
      //   path: "/post/:id",
      //   element: <Single />,
      // },
      // {
      //   path: "/",
      //   element: <PageOne />,
      // }
      // {
      //   path: "/",
      //   element: <Dashboard />,
      // }
      {
        path: "/",
        element: <Form />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </div>
  );
}

export default App;
