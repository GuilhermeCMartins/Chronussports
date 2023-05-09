import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import styles from "./styles.module.css";
import Administrators from "../../molecules/Administrators/Administrators";

SwiperCore.use([Navigation]);

interface Props {
  name: string;
  position: string;
  initial_year: number;
  final_year: number;
  image: string;
}

interface CarouselProps {
  administrators: Props[];
}

interface SliderInfosProps {
  adm: Props;
}

function SliderAdm({ adm }: SliderInfosProps) {
  return (
    <div>
      <div>
        <Administrators adm={adm}></Administrators>
      </div>
    </div>
  );
}

export default function CarouselAdm({ administrators }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAdministrator = administrators[activeIndex];

  function handleSlideChange(index: number) {
    setActiveIndex(index);
  }

  return (
    <section className={styles.section}>
      <Swiper
        navigation={{
          prevEl: `.${styles["custom-swiper-button-prev"]}`,
          nextEl: `.${styles["custom-swiper-button-next"]}`,
        }}
        modules={[Navigation]}
        onSlideChange={({ realIndex }) => handleSlideChange(realIndex)}
        className={styles.swiper}
      >
        {administrators.map((adm, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className={styles.image}>
                <Image
                  src={adm.image}
                  width={400}
                  height={400}
                  className={isActive ? styles.active : styles.inactive}
                  alt=""
                ></Image>
              </div>
            )}
          </SwiperSlide>
        ))}

        <div className={styles.controllers}>
          <div className={styles["custom-swiper-button-prev"]}>
            <Image
              src="/assets/images/seta_nav_prev.svg"
              width={24}
              height={24}
              alt="prev"
            ></Image>
          </div>
          <div className={styles["custom-swiper-button-next"]}>
            <Image
              src="/assets/images/seta_nav_next.svg"
              width={24}
              height={24}
              alt="next"
            ></Image>
          </div>
        </div>
      </Swiper>
      <SliderAdm adm={activeAdministrator}></SliderAdm>
    </section>
  );
}
