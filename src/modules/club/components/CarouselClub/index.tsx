import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

import styles from './carousel.module.css'

import 'swiper/swiper-bundle.css';
import SelectCarousel from '../Select/select';


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

  type Option = {
    id: number;
    name: string;
    unavailable: boolean;
  }

const modalidade = [
  { id: 1, name: 'Qual a modalidade?', unavailable: true },
  { id: 2, name: 'Futebol', unavailable: false },
  { id: 3, name: 'Basquete', unavailable: false },
  { id: 4, name: 'Vôlei', unavailable: false },
  { id: 5, name: 'Futsal', unavailable: false },
  { id: 6, name: 'Todos', unavailable: false}
];


const regiao: Option[] = [
  { id: 1, name: 'De qual Região?', unavailable: true },
  { id: 2, name: 'Norte', unavailable: false },
  { id: 3, name: 'Nordeste', unavailable: false },
  { id: 4, name: 'Sul', unavailable: false },
  { id: 5, name: 'Sudeste', unavailable: false },
  { id: 6, name: 'Todos', unavailable: false}
];

const ranking: Option[] = [
  { id: 1, name: 'Ranking', unavailable: true },
  { id: 2, name: 'Nacional', unavailable: false },
  { id: 3, name: 'Internacional', unavailable: false },
  { id: 4, name: 'Todos', unavailable: false },
];

const nacionalidade: Option[] = [
  { id: 1, name: 'Qual a sua nacionalidade?', unavailable: true },
  { id: 2, name: 'Brasileiro(a)', unavailable: false },
  { id: 3, name: 'Alemão', unavailable: false },
  { id: 4, name: 'Espanhol', unavailable: false },
  { id: 5, name: 'Italiano(a)', unavailable: false },
  { id: 6, name: 'Todos', unavailable: false}
];

SwiperCore.use([EffectCoverflow]);

export default function CarouselClub({items} : Images){    

    return (
        <section className={styles.section}>
           <div className={styles.container}>
           
           <div className={styles.dropdown}>
              <SelectCarousel options={ranking} label='Ranking' ></SelectCarousel>
              <SelectCarousel options={modalidade} label='Modalidade'></SelectCarousel>
              <SelectCarousel options={nacionalidade} label='Nacionalidade'></SelectCarousel>
              <SelectCarousel options={regiao} label='Região'></SelectCarousel>
              <button className={styles.button}>Aplicar</button>
              <button className={styles.button}>Limpar</button>
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
                      <div className={`${isActive ? styles.image_active : ''} ${styles.image}`}>
                          <Image src={image.src} width={image.width} height={image.height} alt={image.alt} ></Image>
                          <p className={`${isActive ? styles.caption : styles.caption_off}`}>{image.caption}</p>
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