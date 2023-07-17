import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ProductSlice } from "./types"

export const fetchProducts = createAsyncThunk<ProductSlice[]>(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("http://localhost:3420/product_lists")
    return data
  }
)
