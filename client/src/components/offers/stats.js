import React from "react";
import styles from "./stats.module.css";
import CountUp from "react-countup";

export default function OfferStats() {
  return (
    <div>
      <div className={styles.stats_container}>
        <div>
          <h5 className={styles.stat}>
            <CountUp end={780} duration={50} />
          </h5>
          <h5 className={styles.stat_title}>TOURS</h5>
        </div>
        <div>
          <h5 className={styles.stat}>
            <CountUp end={987} duration={70} />
          </h5>

          <h5 className={styles.stat_title}>DESTINATIONS</h5>
        </div>
        <div>
          <h5 className={styles.stat}>
            {" "}
            <CountUp end={350} duration={20} />
          </h5>
          <h5 className={styles.stat_title}>TOURISTS</h5>
        </div>
        <div>
          <h5 className={styles.stat}>
            <CountUp end={166} duration={15} />
          </h5>
          <h5 className={styles.stat_title}>HOTELS</h5>
        </div>
      </div>
      <h5 className={styles.bottom_devider}>{}</h5>
    </div>
  );
}
