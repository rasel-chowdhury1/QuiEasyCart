import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Accounts/Login";
import Register from "../Components/Accounts/Register";
import Home from "../Components/Pages/Home/Home/Home";
import AdminDashboard from './../Components/AdminDashboard/Dashboard/Dashboard';
import Reviews from "../Components/AdminDashboard/Dashboard/Reviews";
import Admin from "../Components/AdminDashboard/AdminLayout/Admin";
import Dashboard from "./../Components/AdminDashboard/Dashboard/Dashboard";
import Stats from "../Components/AdminDashboard/Dashboard/Stats";
import Products from "../Components/AdminDashboard/Dashboard/Products";
import Orders from "../Components/AdminDashboard/Dashboard/Orders";
import Payments from "../Components/AdminDashboard/Dashboard/Payments";
import HotOffer from "../Components/AdminDashboard/Dashboard/HotOffer";
import Settings from "../Components/AdminDashboard/Dashboard/Settings";
import User from "../Components/AdminDashboard/Dashboard/User";
import Help from './../Components/AdminDashboard/Dashboard/Help';
import Appearance from './../Components/AdminDashboard/Dashboard/Appearance';

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
       
      ]
    },
    {
      path: 'admin',
      element: <Admin></Admin>,
      children: [
        {
          path: '',
          element: <Dashboard></Dashboard>
        },
        {
          path: 'admin/stats',
          element: <Stats></Stats>
        },
        {
          path: 'admin/product',
          element: <Products></Products>
        },
        {
          path: 'admin/orders',
          element: <Orders></Orders>
        },
        {
          path: 'admin/user',
          element: <User></User>
        },
        {
          path: 'admin/reviews',
          element: <Reviews></Reviews>
        },
        {
          path: 'admin/payments',
          element: <Payments></Payments>
        },
        {
          path: 'admin/hotoffers',
          element: <HotOffer></HotOffer>
        },
        {
          path: 'admin/appearance',
          element: <Appearance></Appearance>
        },
        {
          path: 'admin/settings',
          element: <Settings></Settings>
        },
        {
          path: 'admin/help',
          element: <Help></Help>
        },
      ]
    }
    
  ]);

  export default router;