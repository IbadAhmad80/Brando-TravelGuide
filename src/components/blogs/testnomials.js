import React from "react";
import styles from "./testnomials.module.css";
import { FaQuoteRight } from "react-icons/fa";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./swiper.css";

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
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        className={styles.mySwiper}
      >
        {testnomialIDs.map((id) => {
          return (
            <SwiperSlide className={styles.swiper_slide}>
              <SingleTestnomial id={id} key={id} />
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil
      </h6>
      <div className={styles.user_section}>
        <img
          src={`https://swiperjs.com/demos/images/nature-${id}.jpg`}
          alt={`testnomial pic ${id}`}
        />
        <span>
          <h6 className={styles.user}>Afreen Mushtaq</h6>
          <h6 className={styles.post}>Nature Enthusiast</h6>
        </span>
      </div>
    </div>
  );
}
