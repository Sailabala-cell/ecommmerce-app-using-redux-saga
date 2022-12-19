import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant"

export const addProductaction  =  ()=>
{
    const payload=['hello','hi']
    console.warn("action is called")
    return {
        type: PRODUCT_LIST,
        payload
    }
} 

export const searchProductList = (query) =>{
    console.warn("search action")
    return {
        type: SEARCH_PRODUCT,
        query
    }
}