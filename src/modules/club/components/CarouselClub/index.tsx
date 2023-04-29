import React, { useRef } from 'react';
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image'

import styles from './carousel.module.css'

import 'swiper/swiper-bundle.css';
import Dropdown from '../Dropdown';

type Images = {
    items: {
      key: number;
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }[];
  };

SwiperCore.use([EffectCoverflow]);

const nacionalidade = [
  { id: 1, label: 'Qual a sua nacionalidade?' },
  { id: 2, label: 'Brasileiro(a)' },
  { id: 3, label: 'Alemão' },
  { id: 4, label: 'Espanhol' },
  { id: 5, label: 'Italiano(a)' },
];

const modalidade = [
  { id: 1, label: 'Qual a modalidade?' },
  { id: 2, label: 'Futebol' },
  { id: 3, label: 'Basquete' },
  { id: 4, label: 'Vôlei' },
  { id: 5, label: 'Futsal' },
];

const regiao = [
  { id: 1, label: 'De qual Região?' },
  { id: 2, label: 'Norte' },
  { id: 3, label: 'Nordeste' },
  { id: 4, label: 'Sul' },
  { id: 5, label: 'Sudeste' },
];

const ranking = [
  { id: 1, label: 'Ranking' },
  { id: 2, label: 'Nacional' },
  { id: 3, label: 'Internacional' },
];

export default function CarouselClub({items} : Images){    

    return (
        <section className={styles.section}>
          
           <div className={styles.container}>
           <div className={styles.dropdown}>
              <Dropdown items={nacionalidade} label='Nacionalidade'></Dropdown>
              <Dropdown items={modalidade} label='Modalidade'></Dropdown>
              <Dropdown items={regiao} label='Região'></Dropdown>
              <Dropdown items={ranking} label='Ranking'></Dropdown>
              <button className={styles.button}>Aplicar</button>
            </div>
            
            <div className={styles.slider}>
            <Swiper
                breakpoints = {{
                  2000:{
                    slidesPerView: 7,
                    slidesPerGroup: 1,
                  },
                  1600:{
                    slidesPerView: 7,
                    slidesPerGroup: 1,
                  },
                  1450:{
                      slidesPerView: 6,
                      slidesPerGroup: 1,
                  },
                  1100:{
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                  },
                  800: {
                      slidesPerView: 4,
                      slidesPerGroup: 1,
                  },
                  500: {
                      slidesPerView: 3,
                      slidesPerGroup: 1,
                  }
              }}
                effect={'coverflow'}
                centeredSlides={true}
                loop={false}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
                className={styles.swiper_container}
                initialSlide={4}
                navigation = {{ 
                  prevEl: `.${styles['custom-swiper-button-prev']}`,
                  nextEl: `.${styles['custom-swiper-button-next']}`,
                }}
            >
                {items.map((image) => 
                  <SwiperSlide key={image.key}>
                     {({ isActive }) => (
                      <div className={isActive ? styles.image_active : styles.image}>
                          <Image src={image.src} width={image.width} height={image.height} alt={image.alt} ></Image>
                      </div>   
                    )}
                    
                 </SwiperSlide>   
                )}
                <div className={styles.controllers}>
                  <div className={styles['custom-swiper-button-prev']}><Image src='/assets/images/seta_nav_prev.svg' width={24} height={24} alt='prev'></Image></div>
                  <div className={styles['custom-swiper-button-next']}><Image src='/assets/images/seta_nav_next.svg' width={24} height={24} alt='next'></Image></div>
                </div>
                
                </Swiper>
               
                </div>
                
            </div>
        </section>
      );
}