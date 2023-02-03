import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import photos from '../data/photos.json'
import styles from '../styles/photos.module.css'

export function Photos({ route = 'main', zone }) {
  const path = route === 'servicios' || zone === 'fuera' ? '/' : ''
  return (
    <section className={styles.content}>
      <Swiper
        direction="horizontal"
        slidesPerView='auto'
        centeredSlides={true}
        speed={1000}
        loop={true}
        grabCursor={true}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        autoplay={{ delay: 1700, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="swiperPhotos"
        coverflowEffect={
          {
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false 
          }
        }
        breakpoints={{
          320: {
            slidesPerView: 'auto'
          },
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          }
        }}
      >
        {photos.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <img src={`${path}${image}`} alt="puede ser una imagen ilustrativa de cerrajeros en bogota" height={600} width={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
