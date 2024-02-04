import {createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Accounts/Login";
import Register from "../Components/Accounts/Register";
import Home from "../Components/Pages/Home/Home/Home";
import Products from "../Components/Pages/Products/Products";
import Reviews from "../Components/AdminDashboard/Dashboard/Reviews";
import Admin from "../Components/AdminDashboard/AdminLayout/Admin";
import Dashboard from "./../Components/AdminDashboard/Dashboard/Dashboard";
import Stats from "../Components/AdminDashboard/Dashboard/Stats";

import Orders from "../Components/AdminDashboard/Dashboard/Orders";
import Payments from "../Components/AdminDashboard/Dashboard/Payments";
import HotOffer from "../Components/AdminDashboard/Dashboard/HotOffer";
import Settings from "../Components/AdminDashboard/Dashboard/Settings";
import User from "../Components/AdminDashboard/Dashboard/User";

import ProductDetails from "../Components/Pages/ProductDetails/ProductDetails";
import Profile from "../Components/Accounts/Profile";

import Cart from "../Components/Cart/Cart"
import Checkout from "../Components/Cart/Checkout";
import Help from './../Components/AdminDashboard/Dashboard/Help';
import Appearance from './../Components/AdminDashboard/Dashboard/Appearance';
import AdminProducts from './../Components/AdminDashboard/Dashboard/AdminProducts';
import Blogs from "../Components/AdminDashboard/Dashboard/Blogs";
import AddProduct from "../Components/AdminDashboard/Dashboard/AddProduct";
import ErrrorPage from "../Components/Pages/ErrorPage/ErrroPage";
import Blogpage from './../Components/Pages/Blog_FrontEnd/Blogpage';
import Blog_details from './../Components/Pages/Blog_FrontEnd/Blog_details';
import Help_details from './../Components/Pages/Help_frontEnd/Help_details';
import Helppage from './../Components/Pages/Help_frontEnd/Helppage';
import EditBlog from "../Components/AdminDashboard/Dashboard/EditBlog";
import AdminCategoryList from "../Components/AdminDashboard/Dashboard/AdminCategoryList";
import About_US from "../Components/Pages/About/About_US";
import Contact_US from "../Components/Pages/Contact/Contact_US";
import Faq from "../Components/Pages/FAQ_FrontEnd/Faq";
import WishList from "../Components/Pages/WishList/WishList";
import AdminContact from "../Components/AdminDashboard/Dashboard/AdminContact";
import OrderDetails from "../Components/Cart/OrderDetails";
import UserDetails from "../Components/AdminDashboard/Dashboard/UserDetails";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AdminRoute from "./AdminRoute";
import AdminCategories from "../Components/AdminDashboard/Dashboard/AdminCategories";




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
          path: "products",
          element: <Products></Products>,
        },
        {
          path: "products/productDetails",
          element: <ProductDetails></ProductDetails>
        },
        {
          path: "profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
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
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "checkout",
          element: <Checkout></Checkout>
        },
        {
          path: "orderDetails",
          element:<OrderDetails></OrderDetails>
        },
        {
          path: "blog",
          element: <Blogpage></Blogpage>
        },
        {
          path: "blogdetails/:id",
          element: <Blog_details></Blog_details>, 
          loader: ({params}) => fetch(`http://localhost:3000/blog/${params.id}`)
        },
        {
          path: "updateblog/:id",
          element: <EditBlog></EditBlog>, 
          loader: ({params}) => fetch(`http://localhost:3000/blog/${params.id}`)
        },
        {
          path: "help",
          element: <Helppage></Helppage>
        },
        {
          path: "helpdetails",
          element: <Help_details></Help_details>
        },
        
        {
          path: "about",
          element: <About_US></About_US>
        },
        
        {
          path: "contact",
          element: <Contact_US></Contact_US>
        },
        
        {
          path: "faq",
          element: <Faq></Faq>
        },
        {
          path: "wishlist",
          element:<WishList></WishList>
        },
        
       
      ]
    },
    {
      path: 'admin',
      element: <AdminRoute><Admin></Admin></AdminRoute>,
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
          path: 'product',
          element: <AdminProducts></AdminProducts>
        },
        {
          path: 'category',
          element: <AdminCategories></AdminCategories>
        },
        {
          path: 'admin/product/admin/addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: 'admin/product/admin/categorylist',
          element: <AdminCategoryList></AdminCategoryList>
        },
        {
          path: 'orders',
          element: <Orders></Orders>
        },
        {
          path: 'user',
          element: <User></User>
        },
        {
          path: 'userDetails',
          element: <UserDetails></UserDetails>
        },
        {
          path: 'reviews',
          element: <Reviews></Reviews>
        },
        {
          path: 'payments',
          element: <Payments></Payments>
        },
        {
          path: 'hotoffers',
          element: <HotOffer></HotOffer>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'appearance',
          element: <Appearance></Appearance>
        },
        {
          path: 'settings',
          element: <Settings></Settings>
        },
        {
          path: 'help',
          element: <Help></Help>
        },
        {
          path: 'faq',
          element: <Help></Help>
        },
        {
          path: 'contact',
          element: <AdminContact></AdminContact>
        },
      ]
    },
    {
      path: '*',
      element: <ErrrorPage></ErrrorPage>
    }
    
  ]);

  export default router;