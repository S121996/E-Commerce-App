import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartReducer";


const store = configureStore({
    reducer:{
        cart:CartReducer
    }

    
});


export default store;