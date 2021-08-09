import React from "react";
import styles from "./lower-section.module.css";
import bg from "../../assets/about2.jpg";

export default function LowerSection() {
  return (
    <div className={styles.container}>
      <div className={styles.about_content}>
        <h1 className={styles.heading}>Dare to Explore with Brando Agency</h1>
        <h5 className={styles.sub_heading}>
          A Simply Perfect Place to Get Lost
        </h5>
        <h6 className={styles.description}>
          We are trusted by our clients and have a reputation for the best
          services in the field. Lorem ipsum is simply free text dolor sit amett
          consectetur adipiscing elit. It is a long established fact that a
          reader will be distracted by the readable content of a page.
          <br />
          We are trusted by our clients and have a reputation for the best
          services in the field. Lorem ipsum is simply free text dolor sit amett
          consectetur adipiscing elit. It is a long established fact that a
          reader will be distracted by the readable content of a page.
        </h6>
      </div>
      <div className={styles.image}>
        <img src={bg} alt="about bg-pic" />
      </div>
    </div>
  );
}
