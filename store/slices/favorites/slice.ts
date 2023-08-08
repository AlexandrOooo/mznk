import { createSlice } from "@reduxjs/toolkit"
import { FavoritesSliceState } from "./types"
import {
  fetchAddFavorite,
  fetchDeleteFavorite,
  fetchFavorites,
} from "./request"

const initialState: FavoritesSliceState = {
  items: [],
  status: "success",
}
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const findFavorite = state.items.find(
        (card) => card.id === action.payload.id
      )
      if (findFavorite) {
        state.items = state.items.filter(
          (card) => card.id === action.payload.id
        )
        fetchDeleteFavorite(action.payload.id)
      } else {
        state.items.push(action.payload)
        fetchAddFavorite(action.payload.id)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})
export default favoritesSlice.reducer
export const { toggleToFavorites } = favoritesSlice.actions
