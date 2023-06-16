import React from 'react'
import { ThePostsHome } from '@/components/ThePostsHome'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export const Index: React.FC<{}> = () => {
  const products = useSelector((state: RootState) => state.products)
  return (
    <div className="pt-10 pl-10">
      {products.lists.map((list, index) => (
        <ThePostsHome listProducts={list} key={index} />
      ))}
    </div>
  )
}
export default Index
