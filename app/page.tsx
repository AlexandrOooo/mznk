'use client'
import TheNavigation from '@/components/TheNavigation'
import Sidebar from '@/components/Sidebar'
import TheHomeProducts from '@/components/TheHomeProducts'
import CartPopup from '@/components/CartPopup'

export default function Home() {
  return (
    <>
      <TheNavigation />
      <div className="flex px-8 mx-auto my-0 width-1520">
        <Sidebar />
        <TheHomeProducts />
      </div>
      <CartPopup />
    </>
  )
}
