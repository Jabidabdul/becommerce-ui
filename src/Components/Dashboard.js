import React from 'react'
import { LoginContext} from '../ContextApi/LoginContext';
import { Navigate, Outlet, useNavigate, Link, Route, Routes } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    const navigate = useNavigate();
    React.useEffect(()=>{
        if(localStorage.getItem("user_isLogin")){
            setIsLogin(true);
            setUserInfo(JSON.parse(localStorage.getItem("user")))
        }
        if(!localStorage.getItem("user_isLogin")){
            setUserInfo({})
            setIsLogin(false);
            alert("Oops you are not logged in yet")
            navigate("/home")
        }
    },[])
    return (
        <div style={{width:'100%', height:'100vh', display:'flex', flexDirection:'row', justifyContent:'center',marginTop:'40px', flexWrap:'wrap'}}>
            <div  id="carddiv"><a id="product" href="dashboard/products" class="card">Product</a></div>
           <div id="carddiv"><a id="album" href="dashboard/album" class="card">Album</a></div> 
            <div id="carddiv"><a id="product" href="dashboard/videocall" class="card">Video Call</a></div>
            <div id="carddiv"><a id="product" href="dashboard/resume" class="card">About Me</a></div>
        </div>

    )
}

export default Dashboard
