import React from 'react'
import { LoginContext} from '../ContextApi/LoginContext';
import axios from 'axios'
import Loader from "react-loader-spinner";
import { Navigate, Outlet, useNavigate, Link, Route, Routes } from 'react-router-dom';
import Shopping from './Shopping'
import './Dashboard.css'

const Dashboard = () => {
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    
    React.useEffect(()=>{
        if(localStorage.getItem("user_isLogin")){
            setIsLogin(true)
            setUserInfo(JSON.parse(localStorage.getItem("user")))
        }
    },[])
    return (
        <div style={{width:'100%', height:'100vh', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <div  id="carddiv"><a id="product" href="dashboard/products" class="card">Product</a></div>
           <div id="carddiv"><a id="album" href="dashboard/album" class="card">Album</a></div> 
            <div id="carddiv"><a id="product" href="dashboard/videocall" class="card">Video Call</a></div>
        </div>

    )
}

export default Dashboard