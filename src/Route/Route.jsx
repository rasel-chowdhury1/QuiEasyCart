import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Accounts/Login";
import Register from "../Components/Accounts/Register";
import Home from "../Components/Pages/Home/Home/Home";
import AdminDashboard from './../Components/AdminDashboard/Dashboard/Dashboard';
import Reviews from "../Components/AdminDashboard/Dashboard/Reviews";
import Stats from './../Components/AdminDashboard/Dashboard/Stats';
import User from './../Components/AdminDashboard/Dashboard/User';
import Products from './../Components/AdminDashboard/Dashboard/Products';
import Orders from './../Components/AdminDashboard/Dashboard/Orders';
import Payments from './../Components/AdminDashboard/Dashboard/Payments';
import Appearance from './../Components/AdminDashboard/Dashboard/Appearance';
import Settings from './../Components/AdminDashboard/Dashboard/Settings';
import Helps from "../Components/AdminDashboard/Dashboard/Helps";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "dashboard",
            element: <AdminDashboard></AdminDashboard>
        },
        {
            path: "stats",
            element: <Stats></Stats>
        },
        {
            path: "user",
            element: <User></User>
        },
        {
            path: "product",
            element: <Products></Products>
        },
        {
            path: "orders",
            element: <Orders></Orders>
        },
        {
            path: "reviews",
            element: <Reviews></Reviews>
        },
        {
            path: "payments",
            element: <Payments></Payments>
        },
        {
            path: "hotoffers",
            element: <Reviews></Reviews>
        },
        {
            path: "appearance",
            element: <Appearance></Appearance>
        },
        {
            path: "settings",
            element: <Settings></Settings>
        },
        {
            path: "helps",
            element: <Helps></Helps>
        },
       
      ]
    }
  ]);

  export default router;