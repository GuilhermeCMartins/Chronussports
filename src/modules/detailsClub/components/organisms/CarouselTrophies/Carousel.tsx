import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import styles from './styles.module.css'
import Card from '../../atoms/CardTrophies/Card';
import Image from 'next/image';

SwiperCore.use([Navigation]);

interface Props{
  key: number,
  quantity_trophies: number;
  name_trophies: string;
  trophies_photo: string;
}

interface CarouselProps {
    cards: Props[];
}

const CarouselTrophies: React.FC<CarouselProps> = ({ cards }) => {  
    return (
      <div className={styles.container}>
        <Swiper  
              breakpoints = {{
                2000:{
                  slidesPerView: 3,
                  initialSlide: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                1600:{
                  slidesPerView: 3,
                  initialSlide: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                1450:{
                    slidesPerView: 2,
                    initialSlide: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                1100:{
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 0
                },
                768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
            }}
              centeredSlides={true}
              modules={[Navigation]}
              className={styles.swiper_container}
              navigation = {{ 
                prevEl: `.${styles['custom-swiper-button-prev']}`,
                nextEl: `.${styles['custom-swiper-button-next']}`,
              }}>
          {cards?.map((card) => (
            <SwiperSlide key={card.key}>
              <div className={styles.cards}>
                <Card {...card} />
              </div>
            </SwiperSlide>
          ))}

          <div className={styles.controllers}>
            <div className={styles['custom-swiper-button-prev']}><Image src='/assets/images/seta_nav_prev.svg' width={24} height={24} alt='prev'></Image></div>
            <div className={styles['custom-swiper-button-next']}><Image src='/assets/images/seta_nav_next.svg' width={24} height={24} alt='next'></Image></div>
          </div>
        </Swiper>
      </div>
    );
  };
  
  export default CarouselTrophies;
  
