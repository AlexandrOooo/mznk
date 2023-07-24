import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { FullProductSlice } from "../fullProduct/types"

export const fetchAddFavorite = createAsyncThunk<
  FullProductSlice,
  { id: string }
>("favorites/fetchAddFavorite", async ({ id }) => {
  const { data } = await axios.post(`http://localhost:3420/favorites?=${id}`)
  return data
})
export const fetchDeleteFavorite = createAsyncThunk<
  FullProductSlice,
  { id: string }
>("favorites/fetchDeleteFavorite", async ({ id }) => {
  const { data } = await axios.delete(`http://localhost:3420/favorites?=${id}`)
  return data
})
