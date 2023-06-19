import React from 'react'
import Image from 'next/image'

export const index: React.FC<{}> = () => {
  return (
    <div>
      <Image
        width={630}
        height={630}
        src="https://content1.rozetka.com.ua/goods/images/big/33220101.jpg"
        alt="alt"
      />
    </div>
  )
}
