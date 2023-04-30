import { useState } from 'react'

import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Image from 'next/image'

import styles from './carousel.module.css'
import SelectCarousel from '../Select/Select';

interface Images {
  key: number;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  ranking: string;
  modalidade: string;
  paises: string;
}

interface Props {
  items: Images[];
}

  type Option = {
  id: number;
  name: string;
  unavailable: boolean;
}

import { modalidade } from '@/utils/modalidade';
import { ranking } from '@/utils/ranking';
import paisesComId from '@/utils/country'; 

SwiperCore.use([EffectCoverflow]);

export default function CarouselClub({items} : Props){    
    const [data, ] = useState<Images[]>(items);
    const [selectedRanking, setSelectedRanking] = useState<Option>({ id: 0, name: 'Ranking', unavailable: true });
    const [selectedModalidade, setSelectedModalidade] = useState<Option>({ id: 0, name: 'Modalidade', unavailable: true });
    const [selectedPaises, setSelectedPaises] = useState<Option>({ id: 0, name: "País", unavailable: true });
    const [appliedFilters, setAppliedFilters] = useState<{ ranking: string; modalidade: string; paises: string } | null>(null);


    function handleClear() {
      setSelectedRanking({ id: 0, name: 'Ranking', unavailable: true });
      setSelectedModalidade({ id: 0, name: 'Modalidade', unavailable: true });
      setSelectedPaises({ id: 0, name: "País", unavailable: true });
    }

    function handleFilter(){
      const filters = { ranking: selectedRanking.name, modalidade: selectedModalidade.name, paises: selectedPaises.name };
      setAppliedFilters(filters);
    }

    let filteredData = data;
    if (appliedFilters) {
      filteredData = filteredData.filter((item) => {
        const rankingMatch = !appliedFilters.ranking || item.ranking.toLowerCase().includes(appliedFilters.ranking.toLowerCase());
        const modalidadeMatch = !appliedFilters.modalidade || item.modalidade.toLowerCase().includes(appliedFilters.modalidade.toLowerCase());
        const paisesMatch = !appliedFilters.paises || item.paises.toLowerCase().includes(appliedFilters.paises.toLowerCase());
        return rankingMatch && modalidadeMatch && paisesMatch;
      });
    }

    return (
        <section className={styles.section}>
           <div className={styles.container}>
           
           <div className={styles.dropdown}>
              <SelectCarousel  selectedValue={selectedRanking} onChange={setSelectedRanking} options={ranking} label='Ranking' ></SelectCarousel>
              <SelectCarousel  selectedValue={selectedModalidade} onChange={setSelectedModalidade} options={modalidade} label='Modalidade' ></SelectCarousel>
              <SelectCarousel  selectedValue={selectedPaises} onChange={setSelectedPaises} options={paisesComId} label='País' ></SelectCarousel>
              <button className={styles.button} onClick={handleFilter}>Aplicar</button>
              <button className={styles.button} onClick={handleClear}>Limpar</button>
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