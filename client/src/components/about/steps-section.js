import React from "react";
import classes from "./steps.module.css";
const steps = [
  { id: 1, slug: "Explore your destinations" },
  { id: 2, slug: "Check sheet availability" },
  { id: 3, slug: "Get ready to enjoy tour" },
  { id: 4, slug: "Book your selected sheet" },
];

const StepItem = ({ step }) => {
  return (
    <li>
      <div className={classes.row}>
        <h1 className={classes.numberColor}>0{step.id}.</h1>
        <h4 className={classes.textColor}>{step.slug.toUpperCase()}</h4>
      </div>
      {step.id !== 4 ? <hr className={classes.hr} /> : null}
    </li>
  );
};
const Steps = () => {
  return (
    <ul className={classes.stepsList}>
      {steps.map((step) => (
        <div key={step.id}>
          <StepItem step={step} />
        </div>
      ))}
    </ul>
  );
};

export default Steps;
