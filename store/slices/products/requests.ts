import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ProductSliceState } from "./types"

export const fetchProducts = createAsyncThunk<ProductSliceState[]>(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("http://localhost:3420/products")
    return data
  }
)
