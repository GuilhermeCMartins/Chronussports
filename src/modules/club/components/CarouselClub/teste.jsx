import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import Image from 'next/image'

import styles from './carousel.module.css'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Teste(){
      
    return (
        <section className={styles.section}>
           <div className={styles.container}>
            <div className={styles.slider}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'7'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: styles.swiper_pagination, clickable: true }}
                navigation={{
                nextEl: styles.swiper_button_next,
                prevEl: styles.swiper_button_prev,
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiper_container}
            >
                <SwiperSlide className={styles.slide}>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/assets/images/union.svg' width={200} height={215} alt='Brasão'></Image>
                </SwiperSlide>
        

                </Swiper>
                </div>
            </div>
        </section>
      );
}