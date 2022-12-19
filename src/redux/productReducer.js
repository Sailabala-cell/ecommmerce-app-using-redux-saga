import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productDataReducer=(state=[],action)=>{
    switch(action.type){
     case PRODUCT_LIST: {
        console.warn("reducer list fpr product", action.payload)
        return [...state,action.payload]
     }

     case SET_PRODUCT_LIST:{
        console.warn("reducer list fpr product", action)
        return [...action.data.products]
     }

     default: 
     return state  
    }
}