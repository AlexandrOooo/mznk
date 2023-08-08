"use client"
import TheNavigation from "@/components/TheNavigation"
import Sidebar from "@/components/Sidebar"
import TheHomeProducts from "@/components/TheHomeProducts"
import { useEffect } from "react"
import { useAppDispatch } from "@/store"
import { fetchFavorites } from "@/store/slices/favorites/request"

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchFavorites)
  }, [])
  return (
    <>
      <TheNavigation />
      <div className="flex px-8 mx-auto my-0 w-[1520px]">
        <Sidebar />
        <TheHomeProducts />
      </div>
    </>
  )
}
