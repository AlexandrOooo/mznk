"use client"
import React, { useEffect, useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWallet, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Characteristics from "@/components/Characteristics"
import BuySection from "@/components/BuySection"
import SellerSection from "@/components/SellerSection"
import { FullProductInfoContext } from "./layout"

const Page: React.FC = () => {
  const fullInfoProduct = useContext(FullProductInfoContext)
  if (!fullInfoProduct) {
    return <>Error</>
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="basis-1/2">
          {
            <Image
              width="100"
              height="100"
              src={fullInfoProduct.photos[0]}
              alt={fullInfoProduct.title}
            />
          }
        </div>
        <div className="basis-1/2">
          <div className="rounded border-2 border-slate-400 border-solid mb-8">
            <SellerSection infoProduct={fullInfoProduct} />
            <BuySection infoProduct={fullInfoProduct} />
            <p className="p-4">
              Удачная покупка!{" "}
              <span className="font-bold">{fullInfoProduct.salesNumber}</span>{" "}
              купили цей товар повторно
            </p>
          </div>
          <div className="border-2 border-slate-400 border-solid">
            <p className="p-4 border-b-2 border-b-slate-400 border-b-solid">
              <FontAwesomeIcon icon={faWallet} />
              {fullInfoProduct.paymauntType}
            </p>
            <p className="p-4 ">
              <FontAwesomeIcon icon={faShieldHalved} />
              {fullInfoProduct.guarantee}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Characteristics
          characteristics={fullInfoProduct.characteristics}
          viewSize="smallSize"
        />
      </div>
    </>
  )
}
export default Page
