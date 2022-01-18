import React from 'react'
import { LoginContext } from '../ContextApi/LoginContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import Loader from "react-loader-spinner";


const ProductId = () => {
    const [isLogin, userInfo, setUserInfo, setIsLogin] = React.useContext(LoginContext);
    const [dataForId, setDataForId] = React.useState({});
    const [isDataFetch, setIsDataFetch] = React.useState(false);
    const navigate = useNavigate();
    const id = useParams().productid;

    React.useState(()=>{
        if(!localStorage.getItem("user_isLogin")){
            alert("Oops you are not logged in yet")
            navigate("/home")
        }
        if(isLogin){
            axios
          .get('https://fakestoreapi.com/products')
          .then(res=>{
              setIsDataFetch(true)
              setDataForId(res.data[id])
            })
          .catch(err=>{
              console.log(err)
          })
        }
        
    },[id,dataForId])
    return (
        <div className="d-flex" style={{height:'60vh'}}>
            { (!isDataFetch) ? <div style={{height:'80vh',width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                </div> 
                :
            <>
                <div>
                    <p>{dataForId.title}</p>
                    <img  src={dataForId.image} width="200" height="200" alt="any"/>
                </div>
                <div>
                    <p>{dataForId.description}</p>
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </>}  
        </div>
    )
}

export default ProductId
