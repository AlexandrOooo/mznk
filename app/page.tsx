"use client"
import TheNavigation from "@/components/TheNavigation"
import Sidebar from "@/components/Sidebar"
import TheHomeProducts from "@/components/TheHomeProducts"

export default function Home() {
  return (
    <>
      <TheNavigation />
      <div className="flex px-8 mx-auto my-0 w-[1520px]">
        <Sidebar />
        <TheHomeProducts />
      </div>
    </>
  )
}
