import React from "react";
import styles from "./service.module.css";
import { FaPencilRuler } from "react-icons/fa";
import { BsTablet } from "react-icons/bs";
import { MdLaptopMac } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";

export default function Services() {
  return (
    <div>
      <div className={styles.services_container}>
        <h2 className={styles.main_heading}>OUR AMAZING SERVICES</h2>
        <h4 className={styles.sub_heading}>THIS IS AMAZING TRAVEL AGENCY!</h4>
        <div className={styles.service}>
          {data.map(({ title, id, description }) => {
            return (
              <SingleService
                key={id}
                id={id}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SingleService({ title, description, id }) {
  return (
    <div>
      <div className={styles.logo}>
        {id === "1" ? (
          <GiArcheryTarget />
        ) : id === "2" ? (
          <MdLaptopMac />
        ) : id === "3" ? (
          <BsTablet />
        ) : (
          <FaPencilRuler />
        )}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

const data = [
  {
    id: "1",
    title: "HOTEL BOOKING",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    id: "2",
    title: "BOOK CHEAP FLIGHTS",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    id: "3",
    title: "TAXI CAB BOOKING",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    id: "4",
    title: "TOUR GUIDES & TOURS",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
];
