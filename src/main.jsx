import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import { CustomerLayout } from './layouts/CustomerLayout';
import { CustomerHome } from './pages/CustomerHome';
import { ToastContainer } from 'react-toastify';
import { Login } from './pages/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <CustomerHome />,
      },
      {
        path: 'login',
        element: <Login />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer />
     <RouterProvider router={router} />
  </React.StrictMode>,
)
