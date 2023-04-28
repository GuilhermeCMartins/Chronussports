import SwiperCore, { Lazy, Swiper } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Lazy]);

export default function Teste(){
    const swiper = new Swiper(".card-slider-4-columns", {
        modules: [Navigation, Lazy],
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
          560: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        },
        preloadImages: false,
        lazy: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })

    return (
        <>
        <div className='.card-slider-4-columns'></div>
        </>
      );
}