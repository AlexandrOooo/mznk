import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const ButtonShowMore: React.FC<{
  isShowAll?: boolean
  type: string
  onClickMoreProducts?: () => unknown
}> = ({ isShowAll = false, type, onClickMoreProducts }) => {
  const router = useRouter()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const redirectToSale = () => {
      router.push('/products/sale')
    }

    if (type === 'products') {
      if (!onClickMoreProducts) {
        return
      }

      buttonRef.current?.addEventListener('click', onClickMoreProducts)
    } else if (type === 'sale') {
      buttonRef.current?.addEventListener('click', redirectToSale)
    }
  }, [])

  let textButton = null
  if (type === 'products') {
    textButton = 'show all'
    if (isShowAll) {
      return null
    }
  } else if (type === 'sale') {
    textButton = 'show all sale'
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
