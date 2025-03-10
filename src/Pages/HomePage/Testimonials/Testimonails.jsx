import SectionTitle from '../../../components/SectionTitle'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// review rating 
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


export default function Testimonails() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])


  return (
    <section className='w-10/12 mx-auto'>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      >
      </SectionTitle>


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className='py-10 px-4 flex flex-col items-center space-y-4 mx-14 mb-10'>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className='flex gap-2'>
                <svg width="46.152340" height="84.615234" viewBox="0 0 46.1523 84.6152" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>
                    Created with Pixso.
                  </desc>
                  <defs />
                  <path id="Vector" d="M42.78 41.82C40.54 39.58 37.82 38.46 34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.77 15.38L34.61 15.38C35.65 15.38 36.55 15 37.32 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.32 1.14C36.56 0.38 35.65 0 34.61 0L30.77 0C26.6 0 22.62 0.81 18.83 2.43C15.05 4.05 11.78 6.25 9.01 9.01C6.25 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82Z" fill="#151515" fill-opacity="1.000000" fill-rule="nonzero" />
                </svg>

                <svg width="46.152340" height="84.615234" viewBox="0 0 46.1523 84.6152" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>
                    Created with Pixso.
                  </desc>
                  <defs />
                  <path id="Vector" d="M42.78 41.82C40.54 39.58 37.82 38.46 34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.77 15.38L34.61 15.38C35.65 15.38 36.55 15 37.32 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.32 1.14C36.56 0.38 35.65 0 34.61 0L30.77 0C26.6 0 22.62 0.81 18.83 2.43C15.05 4.05 11.78 6.25 9.01 9.01C6.25 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82Z" fill="#151515" fill-opacity="1.000000" fill-rule="nonzero" />
                </svg>

              </div>

              <p className='text-center'>{review.details}</p>
              <h3 className="text-2xl text-[#CD9003] font-medium text-center">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>

    </section>
  )
}
