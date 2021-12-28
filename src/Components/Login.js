import React , { useContext }from 'react'
import axios from 'axios'
import './Login.css'
import { LoginProvider, LoginContext } from '../ContextApi/LoginContext'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, userInfo, setUserInfo, setIsLogin] = useContext(LoginContext);
    const [loginData, setLoginData] = React.useState({
        email:'',
        password:''
    })
    React.useEffect(()=>{
        
    },[])
    const handleChange=(e)=>{
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit=()=>{
        if(!loginData.email || !loginData.password){
            alert('Fields are missing')
            return
        }
        var config = {
            method: 'post',
            url: 'http://localhost:3001/posts/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : loginData
          };
          console.log(loginData)
          axios(config)
          .then(function (response){
              if(response.data){
                  setIsLogin(true)
                  setUserInfo(response.data)
                  navigate('/dashboard')
                  localStorage.setItem('user', JSON.stringify(response.data));
                  localStorage.setItem('user_isLogin', true);
                  alert('You are Logged in, Welcome')
              }
              else{
                  alert("You are not registered")
              }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    
    return (
        <section class="vh-90">
            <div class="container py-5" style={{width:'65%', height:'80vh'}}>
                <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </div>
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={e=>e.preventDefault()}>
                        <div class="" style={{marginBottom:'30px'}}>
                            <input type="email" id="form1Example13" placeholder="Email Address" 
                            name="email" class="form-control" value={loginData.email} 
                            onChange={handleChange}/>
                        </div>
                        <div class="" style={{marginBottom:'30px'}}>
                            <input type="password" id="form1Example23" placeholder="Password" 
                            name="password" class="form-control" value={loginData.password} 
                            onChange={handleChange}/>
                        </div>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <div class="">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="form1Example3"
                                
                            />
                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                            <a href="#!">Forgot password?</a>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" onClick={handleSubmit}>Sign in</button>
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>
                        <a class="btn btn-primary btn-block" style={{backgroundColor: '#3b5998'}} href="#!" role="button">
                            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                        </a>
                        <a class="btn btn-primary btn-block" style={{backgroundColor: '#55acee'}} href="#!" role="button">
                            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
                    </form>
                </div>
                </div>
            </div>
        </section>       

    )
}

export default Login
