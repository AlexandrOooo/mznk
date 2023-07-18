import React from "react"
import { ProductProps } from "@/components/types"

const index: React.FC<ProductProps> = ({ infoProduct }) => {
  return (
    <>
      <h1 className="text-3xl mb-3">{infoProduct.title}</h1>
      <div className="flex justify-between mb-4">
        <p>{infoProduct.rating}</p>
        <p>
          <span className="text-slate-400">Код:</span>
          <span className="">{infoProduct.code}</span>
        </p>
      </div>
    </>
  )
}
export default index
