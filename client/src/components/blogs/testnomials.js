import React from "react";
import styles from "./testnomials.module.css";
import { FaQuoteRight } from "react-icons/fa";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Testnomials() {
  return (
    <div>
      <div className={styles.testnomial_container}>
        <h2 className={styles.main_heading}>HOTEL REVIEWS</h2>
        <h4 className={styles.sub_heading}>GET OUT OF YOUR COMFORT ZONE</h4>
      </div>
      <SwiperSlideShow />
      <div className={styles.bottom_devider}>{}</div>
    </div>
  );
}

function SwiperSlideShow() {
  const testnomialIDs = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.mySwiper}
      >
        {testnomialIDs.map((id) => {
          return (
            <SwiperSlide className={styles.swiper_slide} key={id}>
              <SingleTestnomial id={id} key={id + Math.random()} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

function SingleTestnomial({ id }) {
  return (
    <div className={styles.testnomial_wrapper}>
      <h1 className={styles.quote}>
        <FaQuoteRight />
      </h1>
      <h6 className={styles.description}>
        Dummy text refers to the bits of content that are used to fill a website
        mock-up. This text helps web designers better envision how the website
        will look as a finished product. It is important to understand that
        dummy text has no meaning whatsoever. Its sole purpose is to fill out
        blank spaces with “word-like” content, without making any copyright
        infringements. Dummy text is also known as filler text or placeholder
        text, and it has been used for a long time in the various fields of
        online publishing.
      </h6>
      <div className={styles.user_section}>
        <img
          src={`https://swiperjs.com/demos/images/nature-${id}.jpg`}
          alt={`testnomial pic ${id}`}
        />
        <span>
          <h6 className={styles.user}>Random Person</h6>
          <h6 className={styles.post}>Nature Enthusiast</h6>
        </span>
      </div>
    </div>
  );
}
