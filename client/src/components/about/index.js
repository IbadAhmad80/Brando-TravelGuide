import React from "react";
import styles from "./about.module.css";
import { BsBookmarkCheck, BsHeart } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
import { GiParachute } from "react-icons/gi";
import LowerSection from "./lower-section";
// import ExploreTours from "./explore-section";
export default function About() {
  const [services] = React.useState([
    {
      id: "1",
      description: "BEST PRICE GUARANTEE",
    },
    {
      id: "2",
      description: "TRUST AND SAFETY",
    },
    {
      id: "3",
      description: "BEST TRAVEL AGENT",
    },
    {
      id: "4",
      description: "TRAVEL INSURANCE",
    },
  ]);

  return (
    <div>
      <div className={styles.about_container}>
        <h2 className={styles.main_heading}>ABOUT TRAVEL</h2>
        <h4 className={styles.sub_heading}>
          TOUR GUIDE & PRIVATE GUIDED TOURS
        </h4>
        <div className={styles.service}>
          {services.map(({ id, description }) => {
            return <SingleService key={id} id={id} description={description} />;
          })}
        </div>
      </div>
      {/* <ExploreTours /> */}
      <LowerSection />
    </div>
  );
}

function SingleService({ description, id }) {
  return (
    <div>
      <div className={styles.logo}>
        {id === "1" ? (
          <BsBookmarkCheck />
        ) : id === "2" ? (
          <GiParachute />
        ) : id === "3" ? (
          <BsHeart />
        ) : (
          <ImCompass2 />
        )}
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
}
