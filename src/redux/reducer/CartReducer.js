import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cart:[]
// }
const CartSlice = createSlice({ //it will create a slice
    name:'cart',
    initialState : {
        cart: []
    },
    //const item = {id:1,qty:4} ,
    reducers:{
      addItem:(state,action)=>{
       state.cart.push(action.payload)
      }
    }
})
export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;