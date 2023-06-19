'use client'
import React, { useState } from 'react'
import { ThePosts } from '../ThePosts'
import { ProductSliceState } from '@/store/slices/product/types'

type Props = {
  listProducts: ProductSliceState
}
export const ThePostsHome: React.FC<Props> = ({ listProducts }) => {
  const [isShowAll, setIsShowAll] = useState(false)

  return (
    <div className="width-1200 my-0 mx-auto">
      <h2 className="font-bold text-xl mb-4">{listProducts.title}</h2>
      <div className="flex flex-col my-0 mx-auto w-full">
        <ThePosts isShowAll={isShowAll} posts={listProducts} />
        {!isShowAll && (
          <button
            className="border-2 border-gray-500 px-8 py-1 cursor-pointer self-end w-1/6 h-9"
            onClick={() => setIsShowAll(() => !isShowAll)}>
            show all
          </button>
        )}
      </div>
    </div>
  )
}
