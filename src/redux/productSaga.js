import {takeEvery, put} from "redux-saga/effects"
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant"

function* getcalled(){
    let data= yield fetch("https://dummyjson.com/products")
    data=yield data.json()
    console.warn('product api is called',)
    yield put({type:SET_PRODUCT_LIST,data})
}

function* searchProduct(query){
    let result= yield fetch(`https://dummyjson.com/products/search?q=${query}`)
     result=yield result.json()
    console.warn('search api is called')
    yield put({type:SEARCH_PRODUCT,result})
}


function* productSaga(){
   yield takeEvery(PRODUCT_LIST, getcalled)
   yield takeEvery(SEARCH_PRODUCT,searchProduct)
} 

export default productSaga