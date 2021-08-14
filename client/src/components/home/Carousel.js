import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.module.css";
import carousel_1 from "../../assets/carousel-1.jpg";
import carousel_2 from "../../assets/carousel-2.jpg";
import carousel_3 from "../../assets/carousel-3.jpg";

export default function HomeCarousel() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <div className={styles.carousel_items} id="1">
        <img src={carousel_1} alt="carausel pic 1" />
        <div className={styles.carousel_description_container}>
          <CarouselItemDescription
            title={"adventure experiences"}
            description={
              "Travel far from the busy world we live in to the unspoiled natural beauty of Africa and other Asian destinations."
            }
          />
        </div>
      </div>
      <div className={styles.carousel_items} id="2">
        <img src={carousel_2} alt="carausel pic 2" />

        <div className={styles.carousel_description_container}>
          <CarouselItemDescription
            title={"enjoying wilderness"}
            description={
              "Wildlife tourism can be an eco and animal friendly tourism, usually showing animals in their natural habitat."
            }
          />
        </div>
      </div>
      <div className={styles.carousel_items} id="3">
        <img src={carousel_3} alt="carausel pic 3" />

        <div className={styles.carousel_description_container}>
          <CarouselItemDescription
            title={"outdoor camping"}
            description={
              "Camping is an elective outdoor recreational activity. Generally held, participants leave developed areas to spend time."
            }
          />
        </div>
      </div>
    </Carousel>
  );
}

function CarouselItemDescription({ title, description }) {
  return (
    <div>
      <h5 className={styles.title}>{title}</h5>
      <h2 className={styles.separation_bar}>{}</h2>
      <h3 className={styles.description}>{description}</h3>
      <a href="#contact">
        <button className={styles.explore_now_btn}>Explore Now</button>
      </a>
    </div>
  );
}
