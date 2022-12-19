import { ADD_TO_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant"
import { EMPTY_CART } from "./constant"
import { PRODUCT_LIST } from "./constant"

export const addTocart= (payload)=>{
    console.warn( "axtion called",payload)
    return {
        type:ADD_TO_CART,
        payload

    }
}

export const removeFromcart= (payload)=>{
    console.warn("reducer action called")
    return {
        type:REMOVE_FROM_CART,
        payload
    }
}

export const emptycart1= ()=>{
    console.warn("empty action called")
    return{
        type:EMPTY_CART,
        
     }
}

