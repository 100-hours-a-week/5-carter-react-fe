import React from "react";
import styles from "./UserInputForm.module.css";

function UserInputForm(props) {
  return (
    <div>
      <div className={styles.inputTitle}>{props.inputTitle}</div>
      <input
        className={styles.inputMessage}
        type="text"
        placeholder={props.inputMessage}
      />
    </div>
  );
}

export default UserInputForm;
