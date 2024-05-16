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
      //  state.cart.push(action.payload)
      const isItemExist = state.cart.find((item)=>
         item.id === action.payload.id
      )
      if(isItemExist){
        isItemExist.quantity += 1 // isItemExist.quantity = isItemExist.quantity + 1 //isItemExist.quantit++ 
      } else {
         state.cart.push({...action.payload, quantity:1})
      }
      },

      removeItem:(state,action)=>{
         const updatedData = state.cart.filter((item)=>
            item.id !== action.payload.id
         )
         state.cart = updatedData
      },
      clearCart:(state,action)=>{
        state.cart = []
      }
    }
})
export const { addItem, removeItem,clearCart } = CartSlice.actions;
export default CartSlice.reducer;