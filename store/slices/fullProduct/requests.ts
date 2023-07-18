import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { FullProductSlice } from "./types"

export const fetchFullProduct = createAsyncThunk<
  FullProductSlice,
  { id: string | null }
>("fullProduct/fetchProducts", async ({ id }) => {
  const { data } = await axios.get(
    `http://localhost:3420/full_product?id=${id}`
  )
  return data
})
