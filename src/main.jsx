import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import {

  RouterProvider
} from "react-router-dom";
import router from './Router/router';
import Context from './Contex/Context';

import {  HelmetProvider } from 'react-helmet-async';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
     <HelmetProvider>
       <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
     </HelmetProvider>
    </Context>
  </React.StrictMode>,
)
