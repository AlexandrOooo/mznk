import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { CommentSlice } from "./types"

export const fetchCommentsById = createAsyncThunk<
  CommentSlice[],
  { id: string }
>("comments/fetchCommentsById", async ({ id }) => {
  const { data } = await axios.get(
    `http://localhost:3420/comments?productId=${id}`
  )
  return data
})
