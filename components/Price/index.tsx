'use client'
import { priceFormatter } from '@/services/price'
import React, { useEffect, useState } from 'react'

type priceProps = {
  priceData: {
    price: number
    currency: string
    discount: number
    pageType: string
  }
}
export const Price: React.FC<priceProps> = ({ priceData }) => {
  const { price, currency, discount, pageType } = priceData
  const [type, setType] = useState(pageType)
  return discount > 0 ? (
    <div>
      <p
        className={
          pageType === 'plp' ? `plpPriceDiscount` : 'pdpPriceDiscount'
        }>
        {priceFormatter(price, currency)}
      </p>
      <p className={pageType === 'plp' ? `plpPriceNew` : 'pdpPriceNew'}>
        {priceFormatter(price - discount, currency)}
      </p>
    </div>
  ) : (
    <div>
      <p
        className={
          pageType === 'plp' ? `plpPriceDiscount` : 'pdpPriceDiscount'
        }></p>
      <p className={pageType === 'plp' ? `plpPrice` : 'pdpPrice'}>
        {priceFormatter(price, currency)}
      </p>
    </div>
  )
}
export default Price
