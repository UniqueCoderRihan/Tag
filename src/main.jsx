import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layouts/Main.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import SingUp from './pages/SingUp/SingUp.jsx'
import Products from './pages/Products/Products'
import ProductDetails from './pages/Products/ProductDetails'
import MyProducts from './pages/my-products/MyProducts'
// import AddNewProduct from './pages/add-new-product/AddNewProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/singup',
        element: <SingUp />
      },
      {
        path: '/all-products',
        element: <Products/>
      },
      {
        path:'/product/:id',
        element: <ProductDetails/>,
        loader: ({params})=> fetch(`http://localhost:3000/product/${params.id}`)
      },
      
      {
        path: '/my-products',
        element: <MyProducts/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
