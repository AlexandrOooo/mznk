import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "./requests"
import { ProductsSliceState } from "./types"
import { setMaxListeners } from "events"

const initialState: ProductsSliceState = {
  lists: [],
  status: "loading",
}
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleIsFavoriteForOneProduct: (state, action) => {
      let findFavorite = null
      for (const list of state.lists) {
        findFavorite = list.items.find((item) => item.id === action.payload)
        if (findFavorite) {
          break
        }
      }
      if (findFavorite) {
        findFavorite.isFavorite = true
      }
      console.log("toggleIsFavoriteForOneProduct", findFavorite, state)
    },
  },

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
export const { toggleIsFavoriteForOneProduct } = productSlice.actions
export default productSlice.reducer
