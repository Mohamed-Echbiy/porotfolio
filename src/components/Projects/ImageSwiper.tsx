import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./imagesSwiper.scss";

interface Images {
  images: string[];
}

function ImageSwiper(props: Images) {
  return (
    <div className="container-swiper">
      <Swiper grabCursor={true} spaceBetween={20} className="swiper_container">
        <SwiperSlide>
          <img src={props.images[0]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[1]} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.images[2]} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSwiper;
