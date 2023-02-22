import React from 'react'
import { useNavigate } from 'react-router';
import { LoginContext } from '../ContextApi/LoginContext';
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = React.useState(false);
    const [isToggleUser, setIsToggleUser] = React.useState(false)
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    
    React.useEffect(()=>{
        // console.log(isToggleUser)
        setToggleMenu(false)
        setIsToggle(false);
        setIsToggleUser(false)
        if(localStorage.getItem("user_isLogin")){
            setIsLogin(localStorage.getItem("user_isLogin"));
            setUserInfo(JSON.parse(localStorage.getItem("user")));
        }  
        else{
            setIsLogin(false)
            setUserInfo({})
        }
    },[isLogin])


  React.useEffect(async() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [window.innerWidth])

  React.useEffect(()=>{
    //   console.log("toggle menu function is called", toggleMenu)
    const hideMenu=()=>{
        if(toggleMenu)
            setIsToggleUser(false)
    }
    window.addEventListener('click', hideMenu);

    return ()=>{
    window.removeEventListener('click', hideMenu);

    }

  },[toggleMenu])

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    setIsToggle(!isToggle);
  }

    const handleLogout=()=>{
        localStorage.removeItem('user_isLogin')
        localStorage.removeItem('user')
        setIsLogin(false);
        setUserInfo({})
        navigate('/home')
        alert('Thankyou, Visit again')
    }
    const handleUser = ()=>{
        setIsToggleUser(!isToggleUser)
    }
    const handleProfile=()=>{
        navigate('/dashboard/resume')
    }


    return (
        <header>
            <div id="brand"><a href="/" id="brand-name">BeCommerce</a></div>
            <nav style={{position:'absolute', right:'20px', marginTop:'15px'}}>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/dashboard/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    {(isLogin && userInfo) ? 
                    <li id="logout"><a  onClick={handleUser}><i class="fas fa-user"></i></a></li> 
                    : 
                    <>
                    <li id="login"><a href="/login" >Login</a></li>
                    <li id="signup"><a href="/signup">Signup</a></li>
                    </>}
                </ul>
                <ul class={isToggleUser ? 'user_info' : 'hide_user_info'}>
                    <li>{userInfo && userInfo.fullName}</li>
                    <li>{userInfo &&  userInfo.email}</li>
                    <div style={{display:'flex'}}>
                        <li id="profile"><a  onClick={handleProfile}>Profile</a></li> 
                        <li id="logout"><a  onClick={handleLogout}>Logout</a></li> 
                    </div>
                </ul>
            </nav>
                <div class='d-flex flex-row' id="mobile-bar" style={{fontSize:"30px",zIndex:1, marginTop:'10px', color:'whitesmoke'}}>
                    {screenWidth < 650 && 
                        <div style={{position:'absolute', right:'0'}}>
                            {(!toggleMenu) ? 
                            <div style={{textAlign:'right', marginRight:'10px'}}>
                                <a><i style={{textAlign:"right"}} onClick={toggleNav} class="fas fa-bars"></i></a>
                            </div>
                            : <div style={{textAlign:'right', marginRight:'10px'}}>
                                <a><i style={{textAlign:"right"}} onClick={toggleNav} class="fas fa-home"></i></a>
                            </div>}
                                <ul class={isToggle ? "mobile-menu" : "mobile-menu-hide"}>
                                    <li style={{width:'100%'}}>{userInfo && userInfo.email}</li>
                                    <li style={{width:'100%'}}>{userInfo && userInfo.userName}</li>
                                    <li style={{width:'100%'}}><a href="/home">Home</a></li>
                                    <li><a href="/dashboard/products">Products</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    {(isLogin && userInfo) ? 
                                    <div style={{display:'flex',fontSize:'15px', zIndex:1}}>
                                        <li id="profile"><a  onClick={handleProfile}>Profile</a></li> 
                                        <li id="logout"><a  onClick={handleLogout}>Logout</a></li> 
                                    </div>
                                     : 
                                    <div style={{display:'flex', fontSize:'10px'}}>
                                        <li id="login"><a href="/login" >Login</a></li>
                                        <li id="signup"><a href="/signup">Signup</a></li>
                                    </div>}
                                </ul>
                    </div>}
                </div>
      </header>
    )
}

export default Header
