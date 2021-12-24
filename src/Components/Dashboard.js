import React from 'react'
import { LoginContext } from '../ContextApi/LoginContext';
import axios from 'axios'
import Loader from "react-loader-spinner";
import { Navigate, useNavigate } from 'react-router';

const Dashboard = () => {
    const navigate = useNavigate();
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    const [data, setData] = React.useState();
    const [isDataFetch, setIsDataFetch] = React.useState(false);

    React.useEffect(()=>{
        console.log("useEffect Called")
        const user = localStorage.getItem("user_isLogin")
        console.log(user)
        user && setIsLogin(user) 
         if(isLogin){
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

    return (
        <div style={{height:'80vh'}}>
            {isLogin && isDataFetch ? <div style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                
                </div>
            :
             <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
                {console.log(data)}
                {/* {Object.entries(data).map((item)=>{
                    console.log(item[1])
                    return(
                        <div className="card" style={{height:'350px',width:'300px', margin:'10px',
                         display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <h9 style={{textAlign:'center'}}><span>{item[1].title}</span></h9>
                            <img src={item[1].image} alt="cloths" height="160px" width="140px" style={{margin:'20px'}}/>
                            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', width:'80%'}}>
                                <p><span>Price : {item[1].price}</span></p>
                                <p><span>Rating : {item[1].rating.rate}</span></p>
                            </div>
                        </div>
                    )
                })} */}
            </div>}
        </div>
    )
}

export default Dashboard
