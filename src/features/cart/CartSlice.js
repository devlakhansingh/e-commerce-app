import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        Add: (state, action) => {

            return {
                ...state,
                cart: [action.payload, ...state.cart],
            }

        },

       
        remove: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)

            }
        },


    }
})


export const { Add, remove } = CartSlice.actions

export default CartSlice.reducer