"use client"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons"
import StarRating from "../StarRating"
import { CommentProps } from "@/components/types"
import { useDispatch } from "react-redux"
import {
  setLikesForComment,
  setDislikesForComment,
} from "@/store/slices/comments/slice"

const Index: React.FC<CommentProps> = ({ infoComment }) => {
  const dispatch = useDispatch()
  const transformProperties = (properties: string[]) => {
    return properties.join(", ")
  }

  return (
    <div className="w-[800px]  border-neutral-400 border-2 rounded">
      <div className="flex justify-between border-b-2 border-neutral-400 p-3">
        <div className="flex items-center">
          <FontAwesomeIcon size="2xl" icon={faBasketShopping} />
          <div className="ml-2">
            <p className="font-bold text-2xl mb-2">{infoComment.reviewName}</p>
            <p className="text-sm">Reviewer</p>
          </div>
        </div>
        <div className="text-slate-400">{infoComment.date}</div>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <p>
          <StarRating rating={infoComment.rating} />
        </p>
        <p className="text-lg">{infoComment.reviewText}</p>
        <div>
          <h5 className="text-lg font-bold mb-2">Advantages:</h5>
          <p className="text-sm">
            {transformProperties(infoComment.advantages)}
          </p>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Disadvantages:</h5>
          <p className="text-sm">
            {" "}
            {transformProperties(infoComment.disadvantages)}
          </p>
        </div>
      </div>
      <div className="flex justify-end p-3 border-t-2  border-neutral-400 gap-3">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => dispatch(setLikesForComment(infoComment.commentId))}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <p className="ml-1">{infoComment.likes}</p>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => dispatch(setDislikesForComment(infoComment.commentId))}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
          <p className="ml-1">{infoComment.dislikes}</p>
        </div>
      </div>
    </div>
  )
}
export default Index
