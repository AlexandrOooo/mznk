'use client'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const Index: React.FC<{ characteristics: any }> = ({ characteristics }) => {
  const router = useRouter()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const addCharacteristicsToRefs = () => {
      router.push(window.location.pathname + '/characteristics')
    }
    buttonRef.current?.addEventListener('click', addCharacteristicsToRefs)
    return () =>
      buttonRef.current?.removeEventListener('click', addCharacteristicsToRefs)
  })
  return (
    <>
      <ul className="justify-between w-[720px]">
        {characteristics.map(
          (item: any) =>
            item.important && (
              <li
                className="flex justify-between mb-2 border-2 p-1"
                key={item.name}>
                <span className="basis-2/6 uppercase text-cyan-700">
                  {item.name}
                </span>
                <span className="basis-4/6 border-l-2 border-l-amber-300 pl-2">
                  {item.value}
                </span>
              </li>
            )
        )}
      </ul>
      <button
        ref={buttonRef}
        className="bg-gray-300 rounded-lg px-6 py-2 mt-2 inline-block text-pink-500 border-pink-500 border-[1px]">
        Показати
      </button>
    </>
  )
}
export default Index
