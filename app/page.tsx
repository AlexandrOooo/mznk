'use client'
import TheNavigation from '@/components/TheNavigation'
import { ThePostsHome } from '@/components/ThePostsHome'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const products = useSelector((state: RootState) => state.products)
  return (
    <>
      <TheNavigation />
      {products.lists.map((list, index) => (
        <ThePostsHome listProducts={list} key={index} />
      ))}
      <Sidebar />
    </>
  )
}
