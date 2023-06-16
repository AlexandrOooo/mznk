'use client'
import React, { useState } from 'react'
import { ThePosts } from '../ThePosts'
import styles from './styles.module.scss'
import { ProductSliceState } from '@/store/slices/product/types'

type Props = {
  listProducts: ProductSliceState
}
export const ThePostsHome: React.FC<Props> = ({ listProducts }) => {
  const [isShowAll, setIsShowAll] = useState(false)

  return (
    <div className="max-w-7xl my-0 mx-auto">
      <h2 className="font-bold text-xl mb-4">{listProducts.title}</h2>
      <div className="flex flex-col max-w-7xl px-2 py-0 my-0 mx-auto">
        <ThePosts isShowAll={isShowAll} posts={listProducts} />
        {!isShowAll && (
          <button
            className={styles['showAll']}
            onClick={() => setIsShowAll(() => !isShowAll)}>
            show all
          </button>
        )}
      </div>
    </div>
  )
}
