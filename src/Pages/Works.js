import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Pagination } from 'swiper';


// Import Swiper React components

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/pagination";
import card1 from '../images/carousel-1.png'
import card2 from '../images/carousel-2.png'
import card4 from '../images/carousel-4.png'
import card5 from '../images/carousel-5.png'

//bg-[#111430]
const Works = () => {
    return (
        <div className='mt-16 bg-[#111430] px-10 py-16'>
            <h1 className='text-2xl text-center mb-12' ><span className='text-2xl font-bold font-serif  text-white'>Here are some of</span> <span className='text-2xl font-bold font-serif text-center mb-6 text-[#7AB259]'>our works</span></h1>
       
              
              <Swiper
              
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
           
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide><img src={card1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={card2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={card4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={card5} alt="" /></SwiperSlide>
      </Swiper>

       
        </div>
    );
};

export default Works;