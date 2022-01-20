import React from 'react'
import { LoginContext } from '../ContextApi/LoginContext';
import axios from 'axios'
import Loader from "react-loader-spinner";
import { Navigate, Outlet, useNavigate } from 'react-router';

const Album = () => {
    const navigate = useNavigate();
    const [isLogin, userInfo, setUserInfo, setIsLogin, cartItem, setCartItem] = React.useContext(LoginContext);
    const [data, setData] = React.useState([]);
    const [isDataFetch, setIsDataFetch] = React.useState(false);
    const [pageNav, setPageNav] = React.useState(0);
    const [pageNavNumber, setPageNavNumber] = React.useState([]);
    const [pageNavSet, setPageNavSet] = React.useState(0);
    const [nextCount, setNextCount] = React.useState(1);
    const [searchPage, setSearchPage] = React.useState();

    React.useEffect(()=>{
        if(!localStorage.getItem("user_isLogin")){
            alert("Oops you are not logged in yet")
            navigate("/home")
        }
         if(localStorage.getItem("user_isLogin")){
          setIsLogin(true) 
          setUserInfo(JSON.parse(localStorage.getItem("user")))
          axios
          .get('https://jsonplaceholder.typicode.com/photos')
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
    React.useEffect(()=>{
        const pages = data.length/50;
        let arr =[];
         for(let i=1; i<=pages; i++){
               arr.push(i);
         }
         setPageNavNumber(arr);
    },[data])

    const handleSubmit=(item)=>{
        setCartItem(item[1])
        navigate('/cart')
    }
 
    const handleNavForward=()=>{
        const page = pageNavSet; 
        if(page === 90) {
            return
        }
        setNextCount(nextCount+1);
        setPageNavSet(page+10)
        if(nextCount < 10 )
            setPageNav((nextCount*500))
        console.log(nextCount)
    }
    const handleNavBackward=()=>{
        const page = pageNavSet;
        if(page === 0){
            return
        }
        setNextCount(nextCount-1);
        setPageNavSet(page-10)
        if(nextCount > 0 )
            setPageNav(pageNav-500)
        console.log(nextCount)
    }

    const HandleGetPage=(pageNumber)=>{
        setPageNav(50 * (pageNumber-1));        
    }

    const handleSearchPage=()=>{
        // searchPage && 
        // setPageNav((searchPage-1) * 50)
        // for(let i=1; i<=500; i+=10){
        //     if(searchPage>=i && searchPage<= i+10){
        //         setNextCount(parseInt(i/10)-1);
        //         setPageNavSet(i-1);
        //     }
        // }
        // console.log(nextCount)
    }
    
    return (
        <div>
            {!(isLogin && isDataFetch && pageNavNumber) ? <div style={{height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
                </div>
            :
            <div style={{width:'100%'}}>
                <div style={{width:'100%', height:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{display:'flex', flexDirection:'row', height:'40px', 
                    width:'100%',alignItems:'center' }}>
                        <div style={{display:'flex', marginLeft:'25%'}}>
                        <button onClick={handleNavBackward} className="btn btn-failure mx-1">Prev</button>
                        <div>
                            { pageNavNumber.map((pageNumber)=>{
                                if(pageNumber>pageNavSet && pageNumber<=(pageNavSet+10)){
                                    return(
                                        <button onClick={()=>HandleGetPage(pageNumber)} className="btn btn-info" 
                                        style={{margin:'0px 5px 0px 5px', width:'50px'}}>{pageNumber}</button>
                                    )
                                }    
                            })}
                        </div>
                        <button onClick={handleNavForward} className="btn btn-success mx-1">Next</button>
                        </div>
                        <div style={{width:''}}></div>
                        <div class="input-group rounded" style={{width:'15%', marginLeft:'4%'}}>
                        <input type="search" class="form-control rounded" 
                         value={searchPage} name='searchPage' onChange={(e)=>{setSearchPage(e.target.value)}}
                         placeholder="Page Number" aria-label="Search" aria-describedby="search-addon" />
                        <button onClick={handleSearchPage} style={{border:'none', outline:'none',borderRadius:'0px 0px 5px 0px'}}><span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span></button>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
                 
                 {Object.entries(data).map((item,i)=>{
                     if(item && (i>=pageNav && i<(pageNav+50))){
                        // setCurrentPage(i);
                        return( 
                            <div className="card" style={{height:'350px',width:'300px', margin:'10px',
                             display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <h9 style={{textAlign:'center'}}><span>{(item[1].title.length >= 30) ? item[1].title.slice(0,30)+"..." : item[1].title}</span></h9>
                                <img src={item[1].thumbnailUrl} alt="colours" height="160px" width="140px" style={{margin:'20px', borderRadius:"20px"}}/>
                                <p>{item[1].id}</p>
                                <button class="btn btn-success" style={{fontSize:'12px'}} > Add to Fav..</button>
                            </div>
                        )
                     }
                     
                 })}
             </div>
             <div style={{width:'100%', height:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{display:'flex', marginTop:'70px'}}>
                        <button onClick={handleNavBackward} className="btn btn-failure mx-1">Prev</button>
                        <div>
                            { pageNavNumber.map((pageNumber,i)=>{
                                if(pageNumber>pageNavSet && pageNumber<=(pageNavSet+10)){
                                    return(
                                        <button onClick={()=>HandleGetPage(pageNumber)} className="btn btn-info" 
                                        style={{margin:'0px 5px 0px 5px', width:'50px'}}>{pageNumber}</button>
                                    )
                                }    
                            })}
                        </div>
                        <button onClick={handleNavForward} className="btn btn-success mx-1">Next</button>
                    </div>
                </div>
            </div>
             }
        </div>
    )
}

export default Album


