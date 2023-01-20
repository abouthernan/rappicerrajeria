import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import styles from '../styles/gallery.modules.css'
import gallery from '../../public/data/gallery.json'

export function Gallery() {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Servicio garantizado</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, type: 'fraction' }}
        grabCursor={true}
        modules={[Pagination, Autoplay, EffectCards]}
        effect="cards"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiperGallery"
      >
        {gallery.map(({ id, image, alt }) => (
          <SwiperSlide key={id}>
            <img src={image} alt={alt} width="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
