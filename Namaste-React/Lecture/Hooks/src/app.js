import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "../components/AppLayout";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "../components/Body";


const root = ReactDOM.createRoot(document.querySelector('body'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/body',
                element: <Body/>
            }
        ]
     
            
    }
])




root.render(<RouterProvider router={router} />)