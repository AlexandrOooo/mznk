import { createSlice } from "@reduxjs/toolkit"
import { CommentsSliceState } from "./types"
import { fetchCommentsById } from "./requests"

const initialState: CommentsSliceState = {
  items: [],
  status: "loading",
}
const commentsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLikesForComment: (state, action) => {
      const findComment = state.items.find(
        (comment) => comment.commentId === action.payload
      )
      if (findComment) findComment.likes++
    },
    setDislikesForComment: (state, action) => {
      const findComment = state.items.find(
        (comment) => comment.commentId === action.payload
      )
      if (findComment) findComment.dislikes++
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsById.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = "success"
    })
    builder.addCase(fetchCommentsById.rejected, (state) => {
      state.items = []
      state.status = "error"
    })
    builder.addCase(fetchCommentsById.pending, (state) => {
      state.items = []
      state.status = "loading"
    })
  },
})
export default commentsSlice.reducer
export const { setLikesForComment, setDislikesForComment } =
  commentsSlice.actions
