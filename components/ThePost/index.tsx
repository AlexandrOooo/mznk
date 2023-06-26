import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import FavoriteHeart from '../icons/FavoriteHeart'
import Price from '@/components/Price'

type Params = {
  post: {
    title: string
    slug: string
    price: number
    discount: number
    isLimited: boolean
    img: string
    isFavorite: boolean
    currency: string
  }
}

export const ThePost: React.FC<Params> = ({ post }: Params) => {
  return (
    <li className={styles['product']}>
      <Link href={`/blog/${post.slug}`} className={styles['productLink']}>
        <Image
          className={styles['productIMG']}
          width="100"
          height="100"
          src={post.img}
          alt={post.title}
        />
        <p className="mb-2 text-cyan-950 text-sm self-start">{post.title}</p>
        <div className="self-start">
          <Price
            priceData={{
              price: post.price,
              discount: post.discount,
              currency: post.currency,
              pageType: 'plp'
            }}
          />
        </div>
        {post.isLimited && (
          <p className="h-4 text-sm text-red-500 mt-2 self-start">Limited</p>
        )}
      </Link>
      <FavoriteHeart
        additionalClassName={`${styles['productFavorite']} `}
        type="small"
      />
    </li>
  )
}
