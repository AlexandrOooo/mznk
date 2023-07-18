"use client"
import React, { useState } from "react"
import { ThePosts } from "../ThePosts"
import { ProductSlice } from "@/store/slices/products/types"
import ButtonShowMore from "@/components/ButtonShowMore"

type Props = {
  listProducts: ProductSlice
}
export const ThePostsHome: React.FC<Props> = ({ listProducts }) => {
  const [isShowAll, setIsShowAll] = useState(false)

  const onClickButton = () => setIsShowAll(() => !isShowAll)

  return (
    <div className="w-[1200px] my-0 mx-auto">
      <h2 className="font-bold text-xl mb-4">{listProducts.title}</h2>
      <div className="flex flex-col my-0 mx-auto w-full">
        <ThePosts isShowAll={isShowAll} posts={listProducts} />
        <ButtonShowMore
          type="products"
          isShowAll={isShowAll}
          onClickMoreProducts={onClickButton}
        />
      </div>
    </div>
  )
}
