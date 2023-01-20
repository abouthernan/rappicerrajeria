import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import styles from 'src/styles/swiper.module.css'

export function Hero() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mySwiper"
      grabCursor={true}
    >
      <SwiperSlide>
        <div className={`${styles.swiper__bg} swiper__one`}>
          <div className={styles.overlay}>
            <h2 className={styles.swiper__title}>
              <span>Servicio de</span> Cerrajería 24/7
            </h2>

            <a
              href="tel:3142902212"
              className={`button ${styles.swiper__button}`}
            >
              Llamar ahora
            </a>

            <div className={styles.payments}>
              <p className={styles.payments__info}>
                Recibimos cualquier medio de pago
              </p>
              <ul className={styles.payments__list}>
                <li className={styles.payments__item}>
                  <img
                    className={styles.payments__img}
                    src="payments/american-express.png"
                    alt="puede ser una imagen con el logo de la franquicia american express"
                  />
                </li>
                <li className={styles.payments__item}>
                  <img
                    className={styles.payments__img}
                    src="payments/master-card.png"
                    alt="puede ser una imagen con el logo de la franquicia master card"
                  />
                </li>
                <li className={styles.payments__item}>
                  <img
                    className={styles.payments__img}
                    src="payments/visa.png"
                    alt="puede ser una imagen con el logo de la franquicia visa"
                  />
                </li>
                <li className={styles.payments__item}>
                  <img
                    className={styles.payments__img}
                    src="payments/diners-club.png"
                    alt="puede ser una imagen con el logo de la franquicia diners club"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={`${styles.swiper__bg}  swiper__two`}>
          <div className={styles.overlay}>
            <h2 className={styles.swiper__title}>
              <span>Bogotá y ciudades aledañas</span> Servicio rápido, seguro y
              garantizado
            </h2>

            <a
              href="tel:3142902212"
              className={`button button__oscure ${styles.swiper__button}`}
            >
              Solicitar servicio
            </a>

            <div className={styles.payments}>
              <p className={styles.payments__info}>
                Chapas Securemme y Mul-T-Lock
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
