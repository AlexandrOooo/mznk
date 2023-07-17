"use client"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWallet, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Characteristics from "@/components/Characteristics"
import BuySection from "@/components/BuySection"
import SellerSection from "@/components/SellerSection"
type Params = {
  params: {
    id: string
  }
}

const Page: React.FC<Params> = ({ params }: Params) => {
  const [infoProduct, setInfoProduct] = useState({
    title:
      "Сухой корм для котят Club 4 Paws (Клуб 4 Лапы) Премиум со вкусом курицы 5 кг (4820083909108)(B4651001)",
    price: 100,
    discount: 32,
    code: 31454,
    currency: "USD",
    rating: 3.4,
    photos: ["/product1.webp"],
    isLimited: true,
    inStock: true,
    saller: "saller",
    isFavoriteSelectNumber: 200,
    salesNumber: 100,
    description: "description",
    guarantee:
      "Гарантия. Законом о защите прав потребителей не предусмотрено возвращение этого товара надлежащего качества.",
    paymauntType:
      'Оплата. Оплата при получении товара, Оплата картой в отделении, Google Pay, Картой онлайн, -5% скидки при оплате от 500 грн картой Mastercard Универсальная/Универсальная Gold от ПриватБанк, Безналичными для юридических лиц, Оплатить онлайн социальной картой "Пакунок малюка", Безналичными для физических лиц, Apple Pay, Оплатить онлайн картой "єПідтримка", Visa, Mastercard ',
    characteristics: [
      {
        name: "type",
        value: "kolbasa",
        important: true,
      },
      {
        name: "size",
        value: "big",
        important: true,
      },
      {
        name: "destination",
        value: "cat",
        important: true,
      },
      {
        name: "class",
        value: "econom",
        important: true,
      },
      {
        name: "weight",
        value: "1kg",
        important: false,
      },
      {
        name: "countryRegistration",
        value: "ukraina",
        important: false,
      },
      {
        name: "countryProduction",
        value: "ukraina",
        important: false,
      },
      {
        name: "count",
        value: 1,
        important: false,
      },
      {
        name: "features",
        value: ["features", "features", "features"],
        important: false,
      },
      // width: null,
      // height: null,
      // color: null,
      {
        name: "dayOfGarantee",
        value: 14,
        important: false,
      },
    ],
    id: params.id,
  })

  return (
    <>
      <div className="flex justify-between">
        <div className="basis-1/2">
          {
            <Image
              width="100"
              height="100"
              src={infoProduct.photos[0]}
              alt={infoProduct.title}
            />
          }
        </div>
        <div className="basis-1/2">
          <div className="rounded border-2 border-slate-400 border-solid mb-8">
            <SellerSection infoProduct={infoProduct} />
            <BuySection infoProduct={infoProduct} />
            <p className="p-4">
              Удачная покупка!{" "}
              <span className="font-bold">{infoProduct.salesNumber}</span>{" "}
              купили цей товар повторно
            </p>
          </div>
          <div className="border-2 border-slate-400 border-solid">
            <p className="p-4 border-b-2 border-b-slate-400 border-b-solid">
              <FontAwesomeIcon icon={faWallet} />
              {infoProduct.paymauntType}
            </p>
            <p className="p-4 ">
              <FontAwesomeIcon icon={faShieldHalved} />
              {infoProduct.guarantee}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Characteristics
          characteristics={infoProduct.characteristics}
          viewSize="smallSize"
        />
      </div>
    </>
  )
}
export default Page
