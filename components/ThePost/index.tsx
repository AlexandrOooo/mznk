import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'

type Params = {
  post: {
    title: string
    slug: string
    price: number
    discount: number
    isLimited: boolean
    img: string
    isFavorite: boolean
  }
}

export const Post: React.FC<Params> = ({ post }: Params) => {
  return (
    <li>
      <Link href={`/blog/${post.slug}`}>
        <div>
          <Image
            className={styles.productIMG}
            width="100"
            height="100"
            src={post.img}
            alt={post.title}
          />
          <p>{post.title}</p>
          <p>{post.price}</p>
        </div>
      </Link>
    </li>
  )
}
