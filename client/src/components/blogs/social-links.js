import React from "react";
import styles from "./blog-details.module.css";
import { FaPinterestSquare } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

export default function SocialLinks() {
  return (
    <div>
      <div className={styles.social_icons}>
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
          <FaPinterestSquare />
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
  );
}
