import React, { useState } from "react";
import classes from "./details.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { GiAirBalloon } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdCardTravel } from "react-icons/md";

const details = [
  {
    id: 1,
    title: "Honeymoon",
    logo: <AiOutlineHeart />,
    image: "pkg-11",
    text: "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. ",
  },
  {
    id: 2,
    title: "Explore Nature",
    logo: <GiAirBalloon />,
    image: "pkg-10",
    text: "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. ",
  },
  {
    id: 3,
    title: "Best Destinations",
    logo: <GoLocation />,
    image: "pkg-0",
    text: "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. ",
  },
  {
    id: 4,
    title: "Amazing Travel",
    logo: <MdCardTravel />,
    image: "pkg-9",
    text: "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. ",
  },
];

const DetailItem = ({ detail, enabledId, enableDetail }) => {
  return (
    <li className={classes.row}>
      <h2 className={classes.columnLogo}>{detail.logo}</h2>
      <h3 className={classes.column}>{detail.title}</h3>
      <h2
        className={classes.columnButton}
        onClick={() => {
          enabledId !== detail.id
            ? enableDetail(detail.id)
            : enableDetail(null);
        }}
      >
        {enabledId === detail.id ? `-` : `+`}
      </h2>
      <div className={classes.row}></div>
      {enabledId === detail.id ? (
        <div className={classes.row}>
          <div className={classes.columnImg}>
            <img
              width="75px"
              height="75px"
              className={classes.image}
              src={`/details/${detail.image}.jpg`}
              alt={detail.title}
            />
          </div>
          <div className={classes.columnText}>
            <p>{detail.text}</p>
          </div>
        </div>
      ) : null}
      {detail.id !== 4 ? <hr className={classes.hr} /> : null}
    </li>
  );
};
const Details = () => {
  const [enabledId, setenabledId] = useState(null);
  const enableDetail = (id) => {
    setenabledId(id);
  };
  return (
    <ui className={classes.detalsList}>
      {details.map((detail) => (
        <DetailItem
          key={detail.id}
          detail={detail}
          enabledId={enabledId}
          enableDetail={enableDetail}
        />
      ))}
    </ui>
  );
};

export default Details;
