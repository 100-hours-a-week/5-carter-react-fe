import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <div>
      {props.long && (
        <div className={styles.longButtonTitle}>{props.buttonTitle}</div>
      )}
      {!props.long && (
        <div className={styles.shortButtonTitle}>{props.buttonTitle}</div>
      )}
    </div>
  );
}

export default Button;
