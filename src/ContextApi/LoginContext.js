import React,{createContext} from "react";

export const LoginContext = createContext();

export const LoginProvider = (props)=>{
    
    const [isLogin, setIsLogin] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({});
    const [cartItem, setCartItem] = React.useState([]);
    
    return(
        <LoginContext.Provider value={[isLogin, userInfo, setUserInfo, setIsLogin, cartItem, setCartItem]}>
            {props.children}
        </LoginContext.Provider>
    )
}