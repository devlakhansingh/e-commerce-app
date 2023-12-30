import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart/CartSlice"
import ProductsReducer from "./product/ProductSlice"
const Store = configureStore({
    reducer: {
        cart: CartReducer,
        products : ProductsReducer
    }
})

export default Store