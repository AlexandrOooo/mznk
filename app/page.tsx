'use client'
import TheNavigation from '@/components/TheNavigation'
import Sidebar from '@/components/Sidebar'
import TheHomeProducts from '@/components/TheHomeProducts'

export default function Home() {
  return (
    <>
      <TheNavigation />
      <div className="flex px-8">
        <Sidebar />
        <TheHomeProducts />
      </div>
    </>
  )
}
