import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./carousel.module.css";
import carousel_1 from "../../assets/pkg-bg-1.jpg";
import carousel_2 from "../../assets/pkg-bg-2.jpg";
import carousel_3 from "../../assets/pkg-bg-3.jpg";
import { AiFillCloseSquare } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function PackageCarousel({ title, description }) {
  const history = useHistory();
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <div className={styles.carousel_items}>
        <div>
          <img src={carousel_1} alt="carausel pic 1" className={styles.image} />
        </div>

        <div className={styles.overlay}>
          <span
            className={styles.close_icon}
            onClick={() =>
              history.push({
                pathname: `/`,
              })
            }
          >
            <AiFillCloseSquare />
          </span>
          <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
        </div>
      </div>
      <div className={styles.carousel_items}>
        <div>
          <img src={carousel_2} alt="carausel pic 2" className={styles.image} />
        </div>

        <div className={styles.overlay}>
          <span
            className={styles.close_icon}
            onClick={() =>
              history.push({
                pathname: `/`,
              })
            }
          >
            <AiFillCloseSquare />
          </span>
          <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
        </div>
      </div>
      <div className={styles.carousel_items}>
        <div>
          <img src={carousel_3} alt="carausel pic 3" className={styles.image} />
        </div>
        <div className={styles.overlay}>
          <span
            className={styles.close_icon}
            onClick={() =>
              history.push({
                pathname: `/`,
              })
            }
          >
            <AiFillCloseSquare />
          </span>
          <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
