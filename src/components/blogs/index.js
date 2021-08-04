import React from "react";
import BlogSlider from "./slider";
import styles from "./blogs.module.css";

export default function Blogs() {
  return (
    <div>
      <div className={styles.blogs_container}>
        <h2 className={styles.main_heading}>LATEST BLOG</h2>
        <h4 className={styles.sub_heading}>
          CHECKOUT OUR LATEST BLOGS AND NEWS
        </h4>
      </div>
      <BlogSlider />
      <div className={styles.bottom_devider}>{}</div>
    </div>
  );
}
