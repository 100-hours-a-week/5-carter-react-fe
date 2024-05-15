import React from "react";
import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={styles.container}>
      <div style={{ height: "20px" }} />
      <div className={styles.msg1}>{props.msg1}</div>
      <div className={styles.msg2}>{props.msg2}</div>
      <div className={styles.buttons}>
        <button className={styles.cancel}>취소</button>
        <button className={styles.agree}>확인</button>
      </div>
    </div>
  );
}

export default Modal;
