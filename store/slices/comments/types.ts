export interface CommentSlice {
  commentId: number
  productId: number
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
  items: CommentSlice[]
  status: "error" | "success" | "loading"
}
