import React from "react"
import { ProductProps } from "../types"

const index: React.FC<ProductProps> = ({ infoProduct }) => {
  return (
    <p className="p-4 font-bold border-b-2 border-b-slate-400 border-b-solid">
      Продавец: {infoProduct.saller}
    </p>
  )
}

export default index
