import React from "react";
import styles from "./offers.module.css";
import offer1 from "../../assets/offers-1.jpg";
import offer2 from "../../assets/offers-2.jpg";
import offer3 from "../../assets/offers-3.jpg";
import offer4 from "../../assets/offers-4.jpg";
import OfferStats from "./stats";

export default function Offers() {
  const [offers] = React.useState([
    { id: "1", title: "HOT BALOON SPECIAL JOURNEY", discount: "50%" },
    { id: "2", title: "WEEKDAYS IN THAILAND BEAUTY", discount: "35%" },
    { id: "3", title: "SOUTH AFRICA ADVENTURES", discount: "20%" },
    { id: "4", title: "HOT BALOON SPECIAL JOURNEY", discount: "45%" },
  ]);
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.offers_container}>
          <h2 className={styles.main_heading}>SPECIAL OFFERS</h2>
          <h4 className={styles.sub_heading}>
            CHECK OUT OUR BEST PROMOTION TOURS
          </h4>
          <div className={styles.offers}>
            {offers.map(({ id, title, discount }) => {
              return (
                <SingleOffer
                  key={id}
                  id={id}
                  title={title}
                  discount={discount}
                />
              );
            })}
          </div>
        </div>
      </div>
      <OfferStats />
    </div>
  );
}

function SingleOffer({ id, title, discount }) {
  return (
    <div>
      <span>
        <img
          src={
            id === "1"
              ? offer1
              : id === "2"
              ? offer2
              : id === "3"
              ? offer3
              : offer4
          }
          alt={`offers ${id} img`}
        />
      </span>

      <div className={styles.offer_content}>
        <h6 className={styles.discount}>{discount} off</h6>
        <h2 className={styles.title}>{title}</h2>
        <h6 className={styles.duration}>8 Days / 350$</h6>
        <h5 className={styles.separation_bar}>{}</h5>
      </div>
    </div>
  );
}
