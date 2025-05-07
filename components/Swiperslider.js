import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import styles from "../styles/slider.module.css";
import Image from "next/image";

export default function EventsSlider({ newdata }) {

  return (
    <div className={styles.margintop}>
    <div className="swiper-controller">
    <Swiper
      className={styles.swiper}
      speed={1500}
      autoplay={{ delay: 7000 }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      }}
      pagination={{ clickable: true, el:'.swiper-pagination', type:'bullets', }}
      breakpoints={{
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 1,
    },
  }}
    >       
            {newdata[0]?.url.slice(1).map(data=><SwiperSlide className={styles.sliderbigcont}>
                <Image src={data} className={styles.img} width={2000} height={2000} alt='image' />
            </SwiperSlide>)}
            <p className={styles.credit}>Image Credit - {newdata[0]?.credit}</p>
            
    </Swiper>
    <div className='button-Arrangement'>
          <div className="button-swiper">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
    </div>
    </div>
    </div>
  )
}
