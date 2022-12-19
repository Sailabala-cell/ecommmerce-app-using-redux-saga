import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
    
export const cartData= (state=[],action)=>{
    
        switch(action.type){
            case ADD_TO_CART: {
                console.warn("reducer called",action.payload)
                return [...state,action.payload]
            } 
            case REMOVE_FROM_CART:{
                console.warn("reducer called remove reducer",action.payload)
                let remainingstate= state.filter((item)=>item.id!==action.payload)
                return [...remainingstate]
            }
            case EMPTY_CART:{
                console.warn("reducer called empty reducer" )
                state=[]
                 return [...state]
            }
            default: 
            return state
        }

}
