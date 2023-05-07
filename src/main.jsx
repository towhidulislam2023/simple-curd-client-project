import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/home/Home.jsx';
import User from './Components/User/User.jsx';
import UpdateUser from './Components/UpdateUser/UpdateUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<App></App>
      },
      {
        path:"/user",
        element:<User></User>,
        loader: () => fetch("http://localhost:5000/users")
      },
      {
        path:"/user/:id",
        element:<UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },

    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
