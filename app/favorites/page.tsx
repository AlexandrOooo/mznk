"use client"
import { useAppDispatch, RootState } from "@/store"
import { fetchFavorites } from "@/store/slices/favorites/request"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { ThePosts } from "@/components/ThePosts"

const page: React.FC<{}> = () => {
  const dispatch = useAppDispatch()
  const favorites = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    dispatch(fetchFavorites())
  }, [])
  return (
    <div>
      <ThePosts listProducts={favorites.items} />
    </div>
  )
}
export default page
