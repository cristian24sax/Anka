import Image from "next/image";
import {
  Autoplay, Navigation,
  Pagination,
  SwiperOptions
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Marcas } from "interfaces/home";
import { ImageStrapi } from "lib/utils";
import { Information } from "../atoms";
import { Container } from "../globals";
export interface HomeMarcasProps {
  title: string;
  marcas: Marcas[];
}
const swiperOptions: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1200,
  loop: true,
  allowTouchMove: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    type: "bullets",
    el: ".home-reviews__pagination",
  },

  breakpoints: {
    374: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    prevEl: ".home-reviews__navigation__prev",
    nextEl: ".home-reviews__navigation__next",
  },

  modules: [Pagination, Navigation, Autoplay],
};

export const HomeMarcas = ({ title, marcas }: HomeMarcasProps) => {
  return (
    <div className="HomeMarcas">
      <Container>
        <Information title={title} type="center" />

        <div className="HomeMarcas-picture  ">
          <Swiper {...swiperOptions}>
            {marcas.map(({ img, url }, index) => (
              <SwiperSlide key={index}>
                <a href={`${url}`} target="_blank" rel="noreferrer">
                  <Image
                    loader={() => ImageStrapi(img.url)}
                    src={ImageStrapi(img.url)}
                    width={500}
                    height={500}
                    alt="img"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="icon-arrow-right left home-reviews__navigation home-reviews__navigation__prev"></div>
          <div className="icon-arrow-right home-reviews__navigation home-reviews__navigation__next"></div>
          <div className="home-reviews__pagination"></div> */}
        </div>
      </Container>
    </div>
  );
};
