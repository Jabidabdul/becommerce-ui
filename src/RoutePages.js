import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Album from './Components/Album'
import Cart from './Components/Cart'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'
import NavFooter from './Components/NavFooter'
import Product from './Components/Product'
import Shopping from './Components/Shopping'
import { SignUp } from './Components/SignUp'
import VideoCall from './Components/VidoeCall'

const RoutePages = () => {
    return(
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="navbar" element={<NavFooter/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/videocall" element={<VideoCall />} />
                <Route path="dashboard/products" element={<Shopping />} />
                <Route path="dashboard/album" element={<Album />} />
                <Route path="dashboard/products:productid" element={<Cart />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default RoutePages
