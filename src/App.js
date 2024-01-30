import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantInfo from "./RestaurantInfo.js";
import Profile from "./Profile.js";

const Applayout = () => {
    return (<div className="app-layout">
        <Header />
        <Outlet />
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantInfo />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ],
        errorElement: <Error/>,
    },
  


])
root.render(<RouterProvider router={appRouter} />);

