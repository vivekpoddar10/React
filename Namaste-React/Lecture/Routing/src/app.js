import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../component/Header";
import About from "../component/About";
import Contact from "../component/Contact";
import Error from "../component/Error";
import Home from "../component/Home";
import Body from "../component/Body";

const root = ReactDOM.createRoot(document.querySelector("body"));
const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
