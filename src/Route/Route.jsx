import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Accounts/Login";
import Register from "../Components/Accounts/Register";
import Home from "../Components/Pages/Home/Home/Home";
import AdminDashboard from './../Components/AdminDashboard/Dashboard/Dashboard';
import Reviews from "../Components/AdminDashboard/Dashboard/Reviews";

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
            path: "reviews",
            element: <Reviews></Reviews>
        },
       
      ]
    }
  ]);

  export default router;