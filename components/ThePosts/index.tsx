"use client"
import React from "react"
import { ThePost } from "../ThePost"
import styles from "./styles.module.scss"

type ThePostsProps = {
  posts: { items: any[] }
  isShowAll: boolean
}
export const ThePosts: React.FC<ThePostsProps> = ({ isShowAll, posts }) => {
  const componentClassName = `w-full flex flex-nowrap overflow-hidden list-none ${
    isShowAll ? "flex=wrap" : ""
  }`

  return (
    <ul className={componentClassName}>
      {posts.items.map((post) => (
        <ThePost post={post} key={post.id} />
      ))}
    </ul>
  )
}
