import React from "react";
import styles from "./contact-links.module.css";
import { AiOutlineMobile } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function ContactLinks() {
  return (
    <div>
      <div className={styles.links_container}>
        <div>
          <h5 className={styles.link_logo}>
            <AiOutlineMobile />
          </h5>
          <h5 className={styles.link_title}>CALL US AT</h5>
          <h5 className={styles.link_info}>123-456-7890</h5>
        </div>
        <div>
          <h5 className={styles.link_logo}>
            <GoLocation />
          </h5>
          <h5 className={styles.link_title}>580 PITNER AVE #2</h5>
          <h5 className={styles.link_info}>Victoria, United States</h5>
        </div>
        <div>
          <h5 className={styles.link_logo}>
            <HiOutlineMailOpen />
          </h5>
          <h5 className={styles.link_title}>EMAIL US AT</h5>
          <h5 className={styles.link_info}>sales@domain.com</h5>
        </div>
      </div>
      <h5 className={styles.bottom_devider}>{}</h5>
    </div>
  );
}
