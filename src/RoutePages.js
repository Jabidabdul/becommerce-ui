import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Album from './Components/Album'
import Cart from './Components/Cart'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'
import Product from './Components/Product'
import { SignUp } from './Components/SignUp'
import VideoCall from './Components/VidoeCall'
import { LoginContext } from './ContextApi/LoginContext';
import { Navigate, useNavigate, Redirect } from 'react-router-dom';
import ProductId from './Components/ProductId'
import Resume from './Components/Resume'

const RoutePages = () => {
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    console.log(isLogin)

  
    return(
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="dashboard" element={<Dashboard /> } />
                <Route path="dashboard/videocall" element={<VideoCall />} />
                <Route path="dashboard/products" element={<Product/>} />
                <Route path="dashboard/album" element={<Album />} />
                <Route path="dashboard/resume" element={<Resume />} />
                <Route path="dashboard/products/:productid" element={<ProductId />}/>
                <Route path="*" element={<Navigate to='/home' />} />
            </Routes>
        </div>
    )
}

export default RoutePages
