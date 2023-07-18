"use client"
import React, { createContext, useEffect } from "react"
import PLPHeader from "@/components/PLPHeader"
import TheNavigation from "@/components/TheNavigation"
import { RootState, useAppDispatch } from "@/store"
import { fetchFullProduct } from "@/store/slices/fullProduct/requests"
import { useSelector } from "react-redux"
import { FullProductSlice } from "@/store/slices/fullProduct/types"

export const FullProductInfoContext = createContext<FullProductSlice | null>(
  null
)
const layout: React.FC<{ children: any }> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { data: fullInfoProduct } = useSelector(
    (state: RootState) => state.fullProduct
  )

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const paramsId = urlParams.get("id")
    dispatch(fetchFullProduct({ id: "1" }))
  }, [])
  if (!fullInfoProduct) return <></>
  return (
    <>
      <TheNavigation />
      <div className="container">
        <PLPHeader infoProduct={fullInfoProduct} />
        <FullProductInfoContext.Provider value={fullInfoProduct}>
          {children}
        </FullProductInfoContext.Provider>
      </div>
    </>
  )
}
export default layout
