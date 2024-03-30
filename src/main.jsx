import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home,About,Contact,Products,Product,Cart,Error} from "./component"
import { ProductContextProvider } from './context/ProductContext.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/products",
        element: <Products />
      },
      {
        path:"/product/:id",
        element: <Product />
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"*",
        element: <Error />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
    <RouterProvider router={router}>

    </RouterProvider>
    </ProductContextProvider>

  </React.StrictMode>,
)
