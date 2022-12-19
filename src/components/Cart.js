import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
function Cart() {
    const cartData=useSelector((state)=>state.cartData)
    console.warn(cartData)
  return (
    <div id='cartProduct'>
        <h1>Cart Page</h1>
        <div style={{marginTop:"100px"}}><strong>Sumtotal: <span>$</span>{cartData.reduce((acc,curr)=>acc+curr.price,0)}</strong></div>
        <div className="cart_page_container">
    
            {cartData.map((item)=>{
              return (
                <div className='cartitem' key={item.id}>
                  <img src={item.thumbnail} alt=""/>
                  <div className='cart__info'>
                <p className='cart__title'>{item.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
               </div>
               
                </div>
                )
            })}
        </div>
   
    </div>
  )
}

export default Cart