import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: null

    ,
    isLoading: false,
    isError: false,
    isSuccess: false
}

const ProductSlice = createSlice({
    name: "products",
    initialState,


    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
    }

})

export default ProductSlice.reducer


export const fetchProduct = createAsyncThunk("FETCH/PRODUCTS", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
})