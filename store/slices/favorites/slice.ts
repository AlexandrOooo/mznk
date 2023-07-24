import { createSlice } from "@reduxjs/toolkit"
import { FavoritesSliceState } from "./types"
import { fetchAddFavorite, fetchDeleteFavorite } from "./request"

const initialState: FavoritesSliceState = {
  items: [],
  status: "success",
}
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const findComment = state.items.find(
        (card) => card.id === action.payload.id
      )
      if (findComment) {
        state.items = state.items.filter(
          (card) => card.id === action.payload.id
        )
        fetchDeleteFavorite(action.payload.id)
      } else {
        fetchAddFavorite(action.payload.id)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddFavorite.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })
  },
})
export default favoritesSlice.reducer
export const { toggleToFavorites } = favoritesSlice.actions
