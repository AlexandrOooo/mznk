'use client'
import React from 'react'
import { ThePost } from '../ThePost'
import styles from './styles.module.scss'

type ThePostsProps = {
  posts: { items: any[] }
  isShowAll: boolean
}
export const ThePosts: React.FC<ThePostsProps> = ({ isShowAll, posts }) => {
  const componentClassName = `${styles['product']} ${
    isShowAll ? styles['showAll'] : ''
  }`

  return (
    <ul className={componentClassName}>
      {posts.items.map((post) => (
        <ThePost post={post} key={post.slug} />
      ))}
    </ul>
  )
}
