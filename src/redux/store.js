import { configureStore } from "@reduxjs/toolkit";
import courseReducer from './cart/courseSlice'
const store = configureStore({
    reducer:{
        course : courseReducer
    }
})

export default store;