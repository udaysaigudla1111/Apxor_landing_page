import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import CarouselCard from './CarouselCard';

const CarouselTestimony = () => {
  return (
    <div className='h-[400px] relative w-[500px]'>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl:".arrow-right",
            prevEl:".arrow-left"
        }}
        modules={[Pagination, Navigation]}
        className="h-full w-[400px]"
        style={{
            "--swiper-pagination-color": "#FFFFFF",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "12px",
  "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
      >
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
        <SwiperSlide> <CarouselCard/> </SwiperSlide>
      </Swiper>
      <div className='arrow-left absolute top-[180px] left-0 z-5 '><FaChevronLeft className='text-white size-10'/></div>
      <div className='arrow-right absolute top-[180px] right-0 z-5'><FaChevronRight className='text-white size-10'/></div>
    </div>
  )
}

export default CarouselTestimony