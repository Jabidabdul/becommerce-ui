import React from 'react'
import { useNavigate } from 'react-router';
import { LoginContext } from '../ContextApi/LoginContext';

const Header = () => {
    const navigate = useNavigate();
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    const [isUser, setIsUser] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    React.useEffect(async()=>{
        if(localStorage.getItem("user_isLogin")){
            setIsUser(localStorage.getItem("user_isLogin"));
            setIsLogin(localStorage.getItem("user_isLogin"));
            setUserData(JSON.parse(localStorage.getItem("user")));
        }  
    },[isLogin,userInfo])

    const handleLogout=()=>{
        localStorage.removeItem('user_isLogin')
        localStorage.removeItem('user')
        setIsLogin(false)
        setIsUser(false)
        setUserData({})
        navigate('/home')
        alert('Thankyou, Visit again')
    }

    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:'65px'}}>
            <a class="navbar-brand" href="#" style={{marginLeft:'10px'}}>{userData.fullName}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"flex", justifyContent:'space-between'}}>
                <ul class="navbar-nav mr-auto" >
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" style={{width:'500px',display:'flex',marginRight:'20px'}}>
                    {(isLogin || isUser) && <a href="/cart" ><i style={{marginRight:'10px',marginTop:'10px'}} class="fas fa-shopping-cart fa-lg me-3"></i></a>}
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" style={{marginRight:'10px'}}/>
                <button class="btn btn-outline-success" type="submit" style={{marginRight:'10px'}}>Search</button>
                {(isLogin || isUser) && <button type="button" class="btn btn-primary" onClick={handleLogout}>Logout</button>}
                </form>
            </div>
            </nav>
        </div>
    )
}

export default Header
