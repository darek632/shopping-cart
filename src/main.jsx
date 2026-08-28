import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import {Home} from './Home.jsx'
import { Shop } from './Shop.jsx'
import Cart from './Cart.jsx'
import NavBar from './NavBar.jsx'
import Layout from './Layout.jsx';
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index:true, element: <Home/>}, 
      {path: 'shop', element: <Shop/>},
      {path: 'cart', element: <Cart/>}
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
