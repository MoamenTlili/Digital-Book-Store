import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Homepage from "../homepage/Homepage";
import Shoppage from "../shoppage/Shoppage";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shoppage/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import Dashboard from "../dashboard/Dashboard";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Loginpage from "../components/Loginpage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/shop",
                element: <Shoppage/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/book/:id",
        element:<SingleBook />,
        loader: ({params}) => fetch (`http://localhost:3000/book/${params.id}`)
      }
    ]
    },

    {
      path:"/admin/dashboard",
      element:<DashboardLayout />,
      children: [
        {
          path:"/admin/dashboard",
          element:<Dashboard />
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook />
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks />
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks />,
          loader: ({params}) => fetch (`http://localhost:3000/book/${params.id}`)
        },
        {
          path: "/admin/dashboard/orders",
          element: <Orders /> 
        }
      ]
    },
    {
      path:"sign-up",
      element:<Signup/>
    },
    {
      path:"login",
      element:<Loginpage/>
    },
    {
      path:"/book/:id/buynow",
      element:<BuyNow/>
    }
    
  ]);

  export default router;