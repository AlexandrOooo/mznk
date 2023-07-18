import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.scss"
import FavoriteHeart from "../icons/FavoriteHeart"
import Price from "@/components/Price"

type Params = {
  post: {
    title: string
    id: string
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
    <li className="relative w-1/6 shrink-0 max-w-[200px] border-r-[1px] border-gray-300 border-b-[1px]">
      <Link
        href={`/product/${post.id}`}
        className="p-4 w-full flex flex-col items-center justify-center"
      >
        <Image
          className="object-contain h-[100px] mb-4"
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
              pageType: "plp",
            }}
          />
        </div>
        {post.isLimited && (
          <p className="h-4 text-sm text-red-500 mt-2 self-start">Limited</p>
        )}
      </Link>
      <FavoriteHeart
        additionalClassName="absolute right-2 top-2"
        type="small"
      />
    </li>
  )
}
