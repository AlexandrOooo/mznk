"use client"
import React from "react"
import { ThePost } from "../ThePost"
import { ThePostsProps } from "./types"

export const ThePosts: React.FC<ThePostsProps> = ({
  isShowAll,
  listProducts,
}) => {
  const componentClassName = `w-full flex flex-nowrap overflow-hidden list-none ${
    isShowAll ? "flex=wrap" : ""
  }`

  return (
    <ul className={componentClassName}>
      {listProducts.items.map((post) => (
        <ThePost infoProduct={post} key={post.id} />
      ))}
    </ul>
  )
}
