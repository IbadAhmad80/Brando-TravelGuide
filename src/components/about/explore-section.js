import React from "react";
import Steps from "./steps-section";
import Details from "./details-section";
import classes from "./explore.module.css";
const ExploreTours = () => {
  return (
    <div className={classes.bgimage}>
      <div className={classes.row}>
        <div className={classes.column}>
          <Steps />
        </div>
        <div className={classes.doubleColumn}>
          <Details />
        </div>
      </div>
    </div>
  );
};

export default ExploreTours;
