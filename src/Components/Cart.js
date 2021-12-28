import React from 'react'
import { useLocation } from 'react-router';
import { LoginContext } from '../ContextApi/LoginContext';

const Cart = (props) => {
    let location = useLocation();
    const [addItem, setAddItem] = React.useState([]);
    const [isLogin, userInfo, setUserInfo, setIsLogin, cartItem, setCartItem] = React.useContext(LoginContext);
    console.log(cartItem)
    React.useEffect(()=>{
        // setAddItem([...addItem, location.state])
        // console.log(addItem)
    },[])
    return (
        <div>
             <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
                {Object.entries(cartItem).map((item,i)=>{
                    return(
                        <div className="" style={{height:'350px',width:'300px', margin:'10px',
                         display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <h9 style={{textAlign:'center'}}><span>{item[1].title}</span></h9>
                            <img src={item.image} alt="cloths" height="160px" width="140px" style={{margin:'20px'}}/>
                            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart
