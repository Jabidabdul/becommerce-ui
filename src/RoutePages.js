import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'
import { SignUp } from './Components/SignUp'

const RoutePages = () => {
    return(
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </div>
    )
}

export default RoutePages
