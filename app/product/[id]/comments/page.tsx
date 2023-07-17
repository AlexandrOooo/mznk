"use client"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Review from "@/components/Review"
import { RootState, useAppDispatch } from "@/store"
import { fetchCommentsById } from "@/store/slices/comments/requests"

const Page: React.FC<{}> = () => {
  const dispatch = useAppDispatch()
  const comments = useSelector((state: RootState) => state.comments.items)
  useEffect(() => {
    dispatch(fetchCommentsById({ id: "1" }))
  }, [])
  return (
    <div>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <Review key={comment.commentId} infoComment={comment} />
      ))}
    </div>
  )
}
export default Page
