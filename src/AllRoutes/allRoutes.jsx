
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Cart } from '../Pages/Cart'
import { Products } from '../Pages/Products'
export const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </>
  )
}
