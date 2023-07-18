import { createSlice } from "@reduxjs/toolkit"
import { fetchFullProduct } from "./requests"
import { FullProductSliceState } from "./types"

const initialState: FullProductSliceState = {
  data: null,
  status: "loading",
}
const productSlice = createSlice({
  name: "fullProduct",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchFullProduct.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = "success"
    })
    builder.addCase(fetchFullProduct.rejected, (state) => {
      state.data = null
      state.status = "error"
    })
    builder.addCase(fetchFullProduct.pending, (state) => {
      state.data = null
      state.status = "loading"
    })
  },
})
// export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions
export default productSlice.reducer
