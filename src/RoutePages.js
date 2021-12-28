import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Cart from './Components/Cart'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'
import Product from './Components/Product'
import { SignUp } from './Components/SignUp'

const RoutePages = () => {
    return(
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path=":productid" element={<Cart />} />
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default RoutePages
