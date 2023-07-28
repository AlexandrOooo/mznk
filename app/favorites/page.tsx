"use client"
import { useAppDispatch, RootState } from "@/store"
import { fetchFavorites } from "@/store/slices/favorites/request"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"

export const page: React.FC<{}> = () => {
  const dispatch = useAppDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)

  useEffect(() => {
    dispatch(fetchFavorites)
  }, [])
  return (
    <div>
      {favorites.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  )
}
