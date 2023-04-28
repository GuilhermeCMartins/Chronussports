import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Lazy } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import styles from './styles.module.css'


SwiperCore.use([Lazy]);

export default function CarouselClub(){

    return (
        <>
        <div className={styles.container}>
            <Swiper
            speed={400}
            spaceBetween={30}
            slidesPerView={2}
            slidesPerGroup={1}
            centeredSlides={true}
            loop={true}
            breakpoints={{
                560: {
                slidesPerView: 2,
                slidesPerGroup: 2
                },
                768: {
                slidesPerView: 4
                },
                1024: {
                slidesPerView: 4
                },
                1280: {
                slidesPerView: 7
                }
            }}
            >
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="bg-white p-4 rounded-lg shadow-md">Alo alo</p>
            </SwiperSlide>

            </Swiper>
        </div>
        </>
      );
}