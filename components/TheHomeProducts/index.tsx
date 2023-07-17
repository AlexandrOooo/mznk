import React, { useEffect } from "react"
import { ThePostsHome } from "@/components/ThePostsHome"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import HomeSwiper from "../HomeSlider"
import { fetchProducts } from "@/store/slices/products/requests"
import { useAppDispatch } from "@/store"

export const Index: React.FC<{}> = () => {
  const dispatch = useAppDispatch()
  const products = useSelector((state: RootState) => state.products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

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
