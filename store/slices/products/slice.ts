import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "./requests"
import { ProductsSliceState } from "./types"

const initialState: ProductsSliceState = {
  lists: [],
  status: "loading",
}
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.lists = action.payload
      state.status = "success"
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.lists = []
      state.status = "error"
    })
    builder.addCase(fetchProducts.pending, (state) => {
      state.lists = []
      state.status = "loading"
    })
  },
})
// export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions
export default productSlice.reducer
