import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.scss"
import FavoriteHeart from "../icons/FavoriteHeart"
import Price from "@/components/Price"
import { ProductProps } from "@/components/types"

export const ThePost: React.FC<ProductProps> = ({ infoProduct }) => {
  return (
    <li className="relative w-1/6 shrink-0 max-w-[200px] border-r-[1px] border-gray-300 border-b-[1px]">
      <Link
        href={`/product/${infoProduct.id}`}
        className="p-4 w-full flex flex-col items-center justify-center"
      >
        <Image
          className="object-contain h-[100px] mb-4"
          width="100"
          height="100"
          src={infoProduct.img}
          alt={infoProduct.title}
        />
        <p className="mb-2 text-cyan-950 text-sm self-start">
          {infoProduct.title}
        </p>
        <div className="self-start">
          <Price
            priceData={{
              price: infoProduct.price,
              discount: infoProduct.discount,
              currency: infoProduct.currency,
              pageType: "plp",
            }}
          />
        </div>
        {infoProduct.isLimited && (
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
