import React from 'react'
import { CartIcons } from '@/components/icons/CartIcons'

export const index: React.FC<{}> = () => {
  return (
    <button className="rounded-xl text-white px-4 py-2 bg-teal-400 flex">
      <CartIcons />
      <span className="ml-2">Купить</span>
    </button>
  )
}
export default index
