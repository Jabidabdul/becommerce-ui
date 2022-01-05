import React from 'react'
import { LoginContext } from '../ContextApi/LoginContext';
import { Navigate, useNavigate } from 'react-router';

const Home = () => {
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    const navigate = useNavigate();

    React.useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem("user_isLogin")))
        if(JSON.parse(localStorage.getItem("user_isLogin"))){
            setIsLogin(true)
            setUserInfo(JSON.parse(localStorage.getItem("user")))
            navigate("/dashboard")
        }else{
            setIsLogin(false)
            setUserInfo({})
        }
        console.log(isLogin, ' ', userInfo);
    },[])

    return (
        <div>
            <div style={{ width:"100%",display:"flex",flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{ textAlign:'center',width:"300px", marginTop:'10%'}}>
            <div class="masthead-heading text-uppercase">Welcome To My Portfolio</div>
                <div class="masthead-heading">I am very much excited to give you best experience</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services" style={{width:"100%", margin:'10px'}}>Tell Me More</a>

                <butoon class="btn btn-success" onClick={()=>navigate('/login')} style={{width:"100%", margin:'10px'}}>Login</butoon>
                <butoon class="btn btn-fail" onClick={()=>navigate('/signup')} style={{width:"100%", margin:'10px'}}>Sign Up</butoon>
            </div>      
        </div>
        </div>
        

    )
}

export default Home