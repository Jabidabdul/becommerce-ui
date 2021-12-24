import React from 'react'
import { LoginContext } from '../ContextApi/LoginContext';
import { Navigate, useNavigate } from 'react-router';

const Home = () => {
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('/login');
    }
    const handleSignUp=()=>{
        navigate('/signup');
    }
    // const[isLogin, setIsLogin] = React.useState(false);

    return (
        <div style={{ height:'80vh'}}>
            <div style={{ width:"100%",display:"flex",flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{ textAlign:'center',width:"300px", marginTop:'10%'}}>
            <div class="masthead-subheading">Welcome To Our Studio!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services" style={{width:"100%", margin:'10px'}}>Tell Me More</a>

                <butoon class="btn btn-success" onClick={handleLogin} style={{width:"100%", margin:'10px'}}>Login</butoon>
                <butoon class="btn btn-fail" onClick={handleSignUp} style={{width:"100%", margin:'10px'}}>Sign Up</butoon>
            </div>      
        </div>
        </div>
        

    )
}

export default Home