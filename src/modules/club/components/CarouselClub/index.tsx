import React, { useState } from 'react';
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image'

import styles from './carousel.module.css'

import 'swiper/swiper-bundle.css';
import Dropdown from '../Dropdown/Dropdown';

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

SwiperCore.use([EffectCoverflow, Navigation]);

const nacionalidade = [
  { id: 1, label: 'Brasileiro(a)' },
  { id: 2, label: 'Alemão' },
  { id: 3, label: 'Espanhol' },
  { id: 4, label: 'Italiano(a)' },
];

const modalidade = [
  { id: 1, label: 'Futebol' },
  { id: 2, label: 'Basquete' },
  { id: 3, label: 'Vôlei' },
  { id: 4, label: 'Futsal' },
];

const regiao = [
  { id: 1, label: 'Norte' },
  { id: 2, label: 'Nordeste' },
  { id: 3, label: 'Sul' },
  { id: 4, label: 'Sudeste' },
];

const ranking = [
  { id: 1, label: 'Nacional' },
  { id: 2, label: 'Internacional' },
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
                navigation={{ enabled: true}}
                modules={[EffectCoverflow, Navigation]}
                className={styles.swiper_container}
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
                </Swiper>
                </div>
            </div>
        </section>
      );
}