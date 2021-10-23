import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/core";

SwiperCore.use([Autoplay,EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="images/react.png" />
        </div>
        <div className="title_">
          <span>React</span>Swiper Slider
        </div>
      </div>
      
      <Swiper
       slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        spaceBetween={30}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
