import React from 'react'
import { ThePostsHome } from '@/components/ThePostsHome'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import HomeSwiper from '../HomeSlider'

export const Index: React.FC<{}> = () => {
  const products = useSelector((state: RootState) => state.products)
  return (
    <div className="flex flex-col width-1200 pt-10 pl-10 box-content">
      <HomeSwiper />
      <div>
        {products.lists.map((list, index) => (
          <ThePostsHome listProducts={list} key={index} />
        ))}
      </div>
    </div>
  )
}
export default Index
