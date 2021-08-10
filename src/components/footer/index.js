import React from "react";
import styles from "./fotter.module.css";
import logo from "../../assets/logo.webp";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.background_image_container}>
      <div>
        <div className={styles.footer_container}>
          <div className={styles.footer_text}>
            CAN'T WAIT TO GET INVOLVED, <br />
            CONNECT WITH US NOW!
          </div>
          <div className={styles.footer_icons}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.facebook_icon}
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.twitter_icon}
            >
              <AiFillTwitterSquare />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.youtube_icon}
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkedin_icon}
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.bottom_devider}></div>
        <div className={styles.logo}>
          <img src={logo} alt="footer logo" width={200} height={42} />
        </div>
        <div className={styles.copywright_text}>
          © 2021 BRANDO - TRAVEL GUIDE IS CREATED BY IBAD.
        </div>
        <div className={styles.bottom_devider}></div>
      </div>
    </div>
  );
}
