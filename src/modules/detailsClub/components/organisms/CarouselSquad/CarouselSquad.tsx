import Image from 'next/image'
import {useState} from 'react'

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.css'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

import styles from './styles.module.css'
import StatsPlayer from '../../molecules/StatsPlayer/StatsPlayer';

interface Props{
  id: number;
  name: string;
  position: string; 
  drible: number;
  pace: number;
  shoot: number;
  defence: number;
  banner_img: string;
  carousel_img: string;
}

interface AthleteProps {
  athlete: Props[];
}

interface SliderProps{
  name: string;
  position: string; 
  drible: number;
  pace: number;
  shoot: number;
  defence: number;
}

interface SliderInfosProps {
  athlete: SliderProps;
  activeIndex: number;
}

function SliderInfos({ athlete, activeIndex }: SliderInfosProps) {
  return (
    <div>
        <div>
          <StatsPlayer ath={athlete}></StatsPlayer>
        </div>
    </div>
  );
}


export default function CarouselSquad({athlete} : AthleteProps){  
  const [activeIndex, setActiveIndex] = useState(0);
   
  const activeAthlete = athlete[activeIndex];  

  function handleSlideChange(index: number) {
    setActiveIndex(index);
  }
    return (
        <section className={styles.section}> 
           <div className={`${styles.container}`} style={{backgroundImage: `url(${activeAthlete?.banner_img})`}}>     
           <SliderInfos athlete={activeAthlete} activeIndex={activeIndex} />     

           <div className={styles.info_name}>
              <h1>{activeAthlete.name}</h1>
              <h3>{activeAthlete.position}</h3>
           </div>
           
                   
            <div className={styles.slider}>
              <Swiper
                    breakpoints = {{
                      2000:{
                        slidesPerView: 7,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                      },
                      768: {
                          slidesPerView: 3,
                          slidesPerGroup: 1,
                          spaceBetween: 10,

                      },
                      500: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                          spaceBetween: 1,
                      }
                  }}
                    centeredSlides={true}
                    loop={false}
                    modules={[Navigation]}
                    className={styles.swiper_container}
                    initialSlide={1}
                    onSlideChange={({ realIndex }) => handleSlideChange(realIndex)}
                    navigation = {{ 
                      prevEl: `.${styles['custom-swiper-button-prev']}`,
                      nextEl: `.${styles['custom-swiper-button-next']}`,
                    }}
                >
                  
                  {athlete.map((ath, index) => (
                    <SwiperSlide key={ath.id}>
                      {({ isActive }) => (
                        <div className={styles.container_image}>
                          <Image
                            src={ath.carousel_img}
                            fill={true}
                            alt=""
                            className={`${isActive ? styles.active : ''}`}
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}

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