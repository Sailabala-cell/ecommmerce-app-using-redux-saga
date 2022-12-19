import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
function Header() {
const result =useSelector((state)=>state.cartData)
console.warn(result)
  return (
    <div className='header' >
    <div style={{fontSize:"30px", paddingTop:"30px", fontFamily:'Aclonica', color:"rgba(75,118,69,1) 100.3% ",fontWeight:"bold"}}>Epic Online Store</div>
     <Link to="/">
     <div className='logo' style={{float:"left",  marginTop:"-40px",marginLeft:"10px"}}>
     <img src="logo.png" alt="" style={{height:"50px", width:"50px", }}/>
      </div>
     </Link>
       {/* <div className='middle' style={{marginTop:"0"}}><h2> Free Online Store </h2></div> */}
       <Link to="/cart"> 
       
       <div className='cart-div'>
            <span>{result.length}</span>
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png" alt=""/>
        </div>
       </Link>
        
    </div>
  )
}

export default Header