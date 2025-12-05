import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Brands from './components/Brands/Brands'
import Carts from './components/Carts/Carts'
import Layout from './components/Layout/Layout'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Products from './components/Products/Products'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import ContactUs from './components/ContactUs/ContactUs'


function App() {
let routers = createBrowserRouter([
{path : '' , element : <Layout/> , children : [ 
  {index: true , element : <Products/>} , 
  {path : 'carts' , element : <Carts/> } , 
  { path : 'login' , element : <Login/>} , 
  {path : 'register' , element : <Register/>} , 
  {path : 'brands', element : <Brands/>} ,
  {path: 'termsAndConditions' , element : <TermsAndConditions/>} , 
  {path : 'forgotPassword', element : <ForgotPassword/>} ,
  {path : 'contactus', element : <ContactUs/>},
  {path : '*' ,element : <NotFound/> }
]}
])

  return (
    <>
     <RouterProvider router = { routers}> </RouterProvider>
    </>
  )
}

export default App
