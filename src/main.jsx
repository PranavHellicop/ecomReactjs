import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home,About,Contact,AllProducts,SingleProduct,Cart,Error} from "./component"
import { ProductContextProvider } from './context/ProductContext.jsx'
import {FilteredProductContextProvider} from './context/FilteredProduct.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

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
        path:"/allproducts",
        element: <AllProducts/>
      },
      {
        path:"/singleproduct/:id",
        element: <SingleProduct/>
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
    <FilteredProductContextProvider>
    <CartContextProvider>
    <RouterProvider router={router}>

    </RouterProvider>
    </CartContextProvider>
    </FilteredProductContextProvider>
    </ProductContextProvider>

  </React.StrictMode>,
)
