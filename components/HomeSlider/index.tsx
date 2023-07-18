import { Pagination, Navigation } from "swiper"
import "./style.scss"

import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ButtonShowMore from "../ButtonShowMore"

const HomeSwiper = () => {
  return (
    <>
      <div className="w-[1200px]">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Image
              width={1270}
              height={400}
              src="https://content.rozetka.com.ua/files/images/original/343160179.jpg"
              alt="alt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1270}
              height={400}
              src="https://content.rozetka.com.ua/files/images/original/343160179.jpg"
              alt="alt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1270}
              height={400}
              src="https://content.rozetka.com.ua/files/images/original/343160179.jpg"
              alt="alt"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1270}
              height={400}
              src="https://content.rozetka.com.ua/files/images/original/343160179.jpg"
              alt="alt"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <ButtonShowMore type="sale" />
    </>
  )
}
export default HomeSwiper
