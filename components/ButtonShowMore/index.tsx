import React, { useRef } from 'react'
import { useRouter } from 'next/router'

const ButtonShowMore: React.FC<{
  isShowAll?: boolean
  type: string
  onClickMoreProducts?: () => unknown
}> = ({ isShowAll = false, type, onClickMoreProducts }) => {
  const router = useRouter()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const redirectToSale = () => {
    router.push('/products/sale')
  }

  let textButton = null
  if (type === 'products') {
    textButton = 'show all'

    if (!onClickMoreProducts) {
      return null
    }

    buttonRef.current?.addEventListener('click', onClickMoreProducts)

    if (isShowAll) {
      return null
    }
  } else if (type === 'sale') {
    textButton = 'show all sale'
    buttonRef.current?.addEventListener('click', redirectToSale)
  }

  return (
    <>
      <button
        ref={buttonRef}
        className="border-2 border-gray-500 px-8 py-1 cursor-pointer self-end w-1/6 h-9">
        {textButton}
      </button>
    </>
  )
}
export default ButtonShowMore
