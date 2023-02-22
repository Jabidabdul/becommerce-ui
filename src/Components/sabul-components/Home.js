import { useNavigate } from "react-router-dom"
export const Home =() => {
    const navigate = useNavigate()
     return(
<>
<div><h1>Home page</h1></div>
<button onClick={()=> navigate('OrderSummary', {replace : true})}>Place Order</button>
</>
     )
}
