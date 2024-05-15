import React from "react";
import styles from "./PostInputContainer.module.css";
import HelperText from "../HelperText/HelperText";
import Button from "../Button/Button";

function PostInputContainer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{props.page}</div>
      <div className={styles.title}>제목*</div>
      <input className={styles.input} placeholder={props.title} />
      <div className={styles.title}>내용*</div>
      <textarea
        className={styles.input}
        style={{ height: "266px", marginBottom: "10px", paddingTop: "20px" }}
        placeholder={props.content}
      />
      <HelperText text={"help"} />
      <div
        className={styles.title}
        style={{ height: "30px", marginBottom: "0px" }}
      >
        이미지
      </div>
      <input type="file" id="file-upload" />
      <div
        style={{ display: "flex", margin: "20px", justifyContent: "center" }}
      >
        <Button long={true} buttonTitle={props.button} />
      </div>
    </div>
  );
}

export default PostInputContainer;
