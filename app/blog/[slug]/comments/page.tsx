'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import Review from '../../../../components/Review'
import { RootState } from '../../../../store'

const Page: React.FC<{}> = () => {
  const comments = useSelector((state: RootState) => state.comments.comments)
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
