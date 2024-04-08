
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import SinglePage from "../Pages/SinglePage/SinglePage";

import Register from "../Pages/Register/Register";

import SingIn from "../Pages/Login/SingIn";
import Protector from "../component/Protector";
import UpdateProfile from "../Pages/UpdataProfile/UpdateProfile";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/property/:id',
        element: <Protector>
          <SinglePage></SinglePage>
          </Protector>,
        loader: () => fetch('/data.json')

      },
      {
        path: '/login',
        element: <SingIn></SingIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
]);


export default router