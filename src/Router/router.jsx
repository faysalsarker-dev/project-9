
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import SinglePage from "../Pages/SinglePage/SinglePage";
import Login from './../Pages/Login/Login';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=> fetch('/data.json')
        },
        {
          path:'/property/:id',
          element:<SinglePage></SinglePage>,
          loader:()=> fetch('/data.json')

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<h3>regiter page</h3>
        }
      ]
    },
  ]);


  export default router