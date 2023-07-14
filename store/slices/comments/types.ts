export interface CommentSliceState {
  commentId: number
  reviewName: string
  date: string
  rating: number
  reviewText: string
  likes: number
  dislikes: number
  photos: string[]
  advantages: string[]
  disadvantages: string[]
}
export interface CommentsSliceState {
  comments: CommentSliceState[]
}
