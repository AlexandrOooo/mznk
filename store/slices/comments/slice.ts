import { createSlice } from '@reduxjs/toolkit'
import { CommentsSliceState } from './types'

const initialState: CommentsSliceState = {
  comments: [
    {
      commentId: 1,
      reviewName: 'Padme',
      date: '2021-10-10',
      rating: 2.3,
      reviewText: 'Lorem ipsum dolor sit amet conse',
      likes: 10,
      dislikes: 2,
      photos: ['/product1.webp'],
      advantages: ['advantage1', 'advantage2'],
      disadvantages: ['disadvantage1', 'disadvantage2']
    },
    {
      commentId: 2,
      reviewName: 'Padme',
      date: '2021-10-10',
      rating: 2.3,
      reviewText: 'Lorem ipsum dolor sit amet conse',
      likes: 10,
      dislikes: 2,
      photos: ['/product1.webp'],
      advantages: ['advantage1', 'advantage2'],
      disadvantages: ['disadvantage1', 'disadvantage2']
    }
  ]
}
const commentsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLikesForComment: (state, action) => {
      const findComment = state.comments.find(
        (comment) => comment.commentId === action.payload
      )
      if (findComment) findComment.likes++
    },
    setDislikesForComment: (state, action) => {
      const findComment = state.comments.find(
        (comment) => comment.commentId === action.payload
      )
      if (findComment) findComment.dislikes++
    }
  }
})
export default commentsSlice.reducer
export const { setLikesForComment, setDislikesForComment } =
  commentsSlice.actions
