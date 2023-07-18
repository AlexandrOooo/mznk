import React from "react"
import ButtonBuy from "@/components/ButtonBuy"
import FavoriteHeart from "@/components/icons/FavoriteHeart"
import Price from "@/components/Price"
import { ProductProps } from "@/components/types"

const index: React.FC<ProductProps> = ({ infoProduct }) => {
  return (
    <div className="flex p-4 border-b-2 items-center gap-6 border-b-slate-400 border-b-solid">
      <Price
        priceData={{
          price: infoProduct.price,
          discount: infoProduct.discount,
          currency: infoProduct.currency,
          pageType: "pdp",
        }}
      />
      <ButtonBuy />
      <div className="flex items-center">
        <FavoriteHeart type="big" />
        <p className="text-xs text-slate-400">
          {infoProduct.isFavoriteSelectNumber}x
        </p>
      </div>
    </div>
  )
}

export default index
