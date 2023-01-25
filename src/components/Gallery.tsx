import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import styles from '../styles/gallery.modules.css'
import gallery from '../data/gallery.json'

export function Gallery({ route = 'main' }) {
  const path = route === 'servicios' ? '/' : ''
  return (
    <section
      className={styles.section}
      style={path ? { padding: 0, margin: '-1rem 0 1rem' } : {}}
    >
      {!path && <h2 className={styles.h2}>Servicio garantizado</h2>}
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
            <img src={`${path}${image}`} alt={alt} width={300} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
