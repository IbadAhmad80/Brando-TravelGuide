import React from "react";
import HomeCarousel from "./Carousel";
import styles from "./home.module.css";
import Packages from "./taylor-packages";
export default function HomeSection() {
  return (
    <div className={styles.home_container}>
      <HomeCarousel />
      <Packages />
    </div>
  );
}
