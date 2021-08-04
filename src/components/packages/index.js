import React from "react";
import Gallery from "./gallery";
import styles from "./packages.module.css";

export default function Packages() {
  return (
    <div className={styles.packages_container}>
      <h2 className={styles.main_heading}>TOUR PACKAGES</h2>
      <h4 className={styles.sub_heading}>
        A GREAT COLLECTION OF OUR TOUR PACKAGES
      </h4>
      <Gallery />
    </div>
  );
}
