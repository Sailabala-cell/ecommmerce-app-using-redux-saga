import { combineReducers } from "redux";
import { productDataReducer } from "./productReducer";
import { cartData } from "./reducer";


export default combineReducers({
    cartData,
    productDataReducer
})