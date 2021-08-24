import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar";
import styles from "./blog-details.module.css";
import LeftWrapper from "./left-wrapper";
import RightWrapper from "./right-wrapper";

export default function BlogDetails({
  location: {
    blog: { title, tags, image, id, key },
    date,
    key: locationKey,
  },
}) {
  //scroll to top of page during navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationKey]);

  return (
    <div className={styles.container}>
      <div className={styles.hero_wrapper}>
        <NavBar />
        <div className={styles.hero_container}>
          <h2 className={styles.hero_title}>{title}</h2>

          <h6 className={styles.hero_description}>{date} / by admin</h6>
        </div>
      </div>

      <div className={styles.navigation_panel}>
        <Link to="/">
          <span>HOME</span>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp; {title}
      </div>
      <div className={styles.details_wrapper}>
        <div className={styles.left_wrapper}>
          {/* <onCompleteMutation.Provider value={{ commentsUpdation }}> */}
          <LeftWrapper image={image} id={id} />
          {/* </onCompleteMutation.Provider> */}
        </div>
        <div className={styles.right_wrapper}>
          <RightWrapper tags={tags} />
        </div>
      </div>
    </div>
  );
}
