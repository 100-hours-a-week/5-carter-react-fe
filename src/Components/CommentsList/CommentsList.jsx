import React from "react";
import styles from "./CommentsList.module.css";
import Button from "../Button/Button";
import CommentContainer from "../CommentContainer/CommentContainer";

function CommentsList() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.input}>댓글을 남겨주세요</div>
        <hr className={styles.line} />
        <div className={styles.button}>
          <Button long={false} buttonTitle={"댓글등록"} />
        </div>
      </div>
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
    </div>
  );
}

export default CommentsList;
