import React from "react"
import Image from "next/image"

const index: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full mt-20 ">
      <Image
        src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg"
        width={240}
        height={240}
        alt=""
      />
      <h3 className="text-2xl font-bold mb-5">Ваша корзина пуста</h3>
      <p>Але це завжди можна виправити</p>
    </div>
  )
}
export default index
