import {configureStore} from "@reduxjs/toolkit"
import productSaga from "./productSaga"
import rootreducer from "./rootreducer"
import createSagaMiddleware from "@redux-saga/core"


const sagaMiddleware = createSagaMiddleware()

const store=configureStore(
    {
        reducer:rootreducer,
        middleware: ()=> [sagaMiddleware]
    })

sagaMiddleware.run(productSaga)    
export default store