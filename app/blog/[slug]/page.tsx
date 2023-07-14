'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import ButtonBuy from '@/components/ButtonBuy'
import FavoriteHeart from '@/components/icons/FavoriteHeart'
import Price from '@/components/Price'
import TheNavigation from '@/components/TheNavigation'
import Characteristics from '@/components/Characteristics'
import Review from '@/components/Review'
type Params = {
  params: {
    slug: string
  }
}

const Page: React.FC<Params> = ({ params }: Params) => {
  const [infoProduct, setInfoProduct] = useState({
    title:
      'Сухой корм для котят Club 4 Paws (Клуб 4 Лапы) Премиум со вкусом курицы 5 кг (4820083909108)(B4651001)',
    price: 100,
    discount: 32,
    code: 31454,
    currency: 'USD',
    rating: 3.4,
    photos: ['/product1.webp'],
    isLimited: true,
    inStock: true,
    saller: 'saller',
    isFavoriteSelectNumber: 200,
    salesNumber: 100,
    description: 'description',
    guarantee:
      'Гарантия. Законом о защите прав потребителей не предусмотрено возвращение этого товара надлежащего качества.',
    paymauntType:
      'Оплата. Оплата при получении товара, Оплата картой в отделении, Google Pay, Картой онлайн, -5% скидки при оплате от 500 грн картой Mastercard Универсальная/Универсальная Gold от ПриватБанк, Безналичными для юридических лиц, Оплатить онлайн социальной картой "Пакунок малюка", Безналичными для физических лиц, Apple Pay, Оплатить онлайн картой "єПідтримка", Visa, Mastercard ',
    characteristics: [
      {
        name: 'type',
        value: 'kolbasa',
        important: true
      },
      {
        name: 'size',
        value: 'big',
        important: true
      },
      {
        name: 'destination',
        value: 'cat',
        important: true
      },
      {
        name: 'class',
        value: 'econom',
        important: true
      },
      {
        name: 'weight',
        value: '1kg',
        important: false
      },
      {
        name: 'countryRegistration',
        value: 'ukraina',
        important: false
      },
      {
        name: 'countryProduction',
        value: 'ukraina',
        important: false
      },
      {
        name: 'count',
        value: 1,
        important: false
      },
      {
        name: 'features',
        value: ['features', 'features', 'features'],
        important: false
      },
      // width: null,
      // height: null,
      // color: null,
      {
        name: 'dayOfGarantee',
        value: 14,
        important: false
      }
    ],
    slug: params.slug
  })

  return (
    <>
      <TheNavigation />
      <div className="container">
        <h1 className="text-3xl mb-3">{infoProduct.title}</h1>
        <div className="flex justify-between mb-4">
          <p>{infoProduct.rating}</p>
          <p>
            <span className="text-slate-400">Код:</span>{' '}
            <span className="">{infoProduct.code}</span>
          </p>
        </div>
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
              <p className="p-4 font-bold border-b-2 border-b-slate-400 border-b-solid">
                Продавец: {infoProduct.saller}
              </p>
              <div className="flex p-4 border-b-2 items-center gap-6 border-b-slate-400 border-b-solid">
                <Price
                  priceData={{
                    price: infoProduct.price,
                    discount: infoProduct.discount,
                    currency: infoProduct.currency,
                    pageType: 'pdp'
                  }}
                />
                <ButtonBuy />
                <div className="flex items-center">
                  <FavoriteHeart type="big" />
                  <p className="text-xs text-slate-400">
                    {infoProduct.isFavoriteSelectNumber}x
                  </p>
                </div>
              </div>
              <p className="p-4">
                Удачная покупка!{' '}
                <span className="font-bold">{infoProduct.salesNumber}</span>{' '}
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
      </div>
    </>
  )
}
export default Page
