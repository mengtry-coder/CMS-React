/** @format */

import React from "react";
import classes from "./../MainStyle.css";
const index = (props) => {
  return (
    <div>
      <h1 className={classes.fonst}>{props.title}</h1>
      <p className={classes.fonst}>{props.description}</p>
    </div>
  );
};

export default index;
