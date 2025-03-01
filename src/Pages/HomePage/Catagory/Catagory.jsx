
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {  Autoplay, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';


export default function Catagory() {
  return (
    <>
    <section>
     <div className='md:w-10/12 mx-auto my-10'>
        <SectionTitle 
            subHeading={"---From 11:00am to 10:00pm---"}
            heading={"ORDER ONLINE"} >
        </SectionTitle>

     <Swiper
       slidesPerView={4}
        spaceBetween={30}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
    //    navigation={true}
       modules={[Autoplay, Pagination]}
       className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="image" className='w-full object-cover bg-no-repeat' />
            <h3 className='md:text-4xl upperxase text-center -mt-6 md:-mt-16 text-stone-100 font-bold '>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="image" className='w-full object-cover bg-no-repeat  ' />
            <h3 className='md:text-4xl upperxase text-center -mt-6 md:-mt-16 text-stone-100 font-bold '>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="image" className='w-full object-cover bg-no-repeat  ' />
            <h3 className='md:text-4xl upperxase text-center -mt-6 md:-mt-16 text-stone-100 font-bold '>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="image" className='w-full object-cover bg-no-repeat  ' />
            <h3 className='md:text-4xl upperxase text-center -mt-6 md:-mt-16 text-stone-100 font-bold '>Cakes</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="image" className='w-full object-cover bg-no-repeat  ' />
            <h3 className='md:text-4xl upperxase text-center -mt-6 md:-mt-16 text-stone-100 font-bold '>desserts</h3>
        </SwiperSlide>
        

      </Swiper>
     </div>
     </section>
    </>
  )
}
