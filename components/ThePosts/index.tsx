import React from 'react'
import { Post } from '../ThePost'
const posts = [
  {
    title: 'My First Post',
    slug: 'my-first-post',
    price: 100,
    discount: 10,
    isLimited: true,
    img: '/product1.webp',
    isFavorite: true
  },
  {
    title: 'My Second Post',
    slug: 'my-second-post',
    price: 100,
    discount: 10,
    isLimited: true,
    img: '/product2.webp',
    isFavorite: true
  },
  {
    title: 'My Third Post',
    slug: 'my-third-post',
    price: 100,
    discount: 10,
    isLimited: true,
    img: '/product3.webp',
    isFavorite: true
  }
]

export const ThePosts: React.FC<{}> = () => {
  return (
    <ul className="">
      {posts.map((post) => (
        <Post post={post} key={post.slug} />
      ))}
    </ul>
  )
}
