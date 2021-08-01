import React from "react";
import styles from "./packages.module.css";
import { data } from "./packages-data";

export default function Packages() {
  return (
    <div className={styles.packages_container}>
      <h2 className={styles.main_heading}>Taylor Made Packages</h2>
      <h4 className={styles.sub_heading}>WHAT ARE YOU IN THE MOOD FOR?</h4>
      <div className={styles.package_grid}>
        {data.map(({ id, title, description, destinations }) => {
          return (
            <SinglePackage
              title={title}
              description={description}
              destination={destinations}
              key={id}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

function SinglePackage({ id, title, description, destination }) {
  return (
    <div id={id} className={styles.package_image}>
      <div className={styles.package_image_overlay}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.separation_bar}>{}</div>
          <div className={styles.destination}>{destination}</div>
        </div>
      </div>
    </div>
  );
}
