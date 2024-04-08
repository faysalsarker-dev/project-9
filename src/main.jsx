import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider
} from "react-router-dom";
import router from './Router/router';
import Context from './Contex/Context';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
