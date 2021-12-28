import React from 'react'
import { LoginContext } from '../ContextApi/LoginContext';
import axios from 'axios'
import Loader from "react-loader-spinner";
import { Navigate, Outlet, useNavigate } from 'react-router';

const Dashboard = () => {
    const navigate = useNavigate();
    const [isLogin, userInfo, setUserInfo, setIsLogin, cartItem, setCartItem] = React.useContext(LoginContext);
    const [data, setData] = React.useState([]);
    const [isDataFetch, setIsDataFetch] = React.useState(false);


    React.useEffect(()=>{
        if(!localStorage.getItem("user_isLogin")){
            alert("Oops you are not logged in yet")
            navigate("/home")
        }
         if(localStorage.getItem("user_isLogin")){
          setIsLogin(true) 
          setUserInfo(JSON.parse(localStorage.getItem("user")))
          axios
          .get('https://fakestoreapi.com/products')
          .then(res=>{
              setIsDataFetch(true)
              setData(res.data)
            })
          .catch(err=>{
              console.log(err)
            setIsDataFetch(false)
          })
        }
    },[])
    const handleSubmit=(item)=>{
        console.log(item[1])
        // navigate('/cart')
        setCartItem(item[1])
        
        navigate('/cart')
    }
    console.log(cartItem)
    return (
        <div style={{height:'80vh'}}>
            {!(isLogin && isDataFetch) ? <div style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                
                </div>
            :
             <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
                {Object.entries(data).map((item,i)=>{
                    return(
                        <div className="card" style={{height:'350px',width:'300px', margin:'10px',
                         display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <h9 style={{textAlign:'center'}}><span>{item[1].title}</span></h9>
                            <img src={item[1].image} alt="cloths" height="160px" width="140px" style={{margin:'20px'}}/>
                            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
                                <div >
                                    <p><span>Price : {item[1].price}</span></p><button class="btn btn-info" style={{width:"100px", fontSize:'10px'}}>Add to Cart</button>
                                </div>
                                <div>
                                    <p><span>Rating : {item[1].rating.rate}</span></p><button 
                                    onClick={()=>handleSubmit(item)}
                                    class="btn btn-success" style={{width:"100px", fontSize:'10px'}}>Buy Now</button>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div>}
            <Outlet />
        </div>
    )
}

export default Dashboard
