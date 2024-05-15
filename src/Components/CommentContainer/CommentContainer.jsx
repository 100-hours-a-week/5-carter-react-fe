import React from "react";
import styles from "./CommentContainer.module.css";

function CommentContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.info1}>
          <img src="/images/beach.jpg" />
          <span>더미 작성자 1</span>
          <span>0000-00-00 00:00:00</span>
        </div>
        <div className={styles.content}>댓글 내용</div>
      </div>
      <div className={styles.commentActions}>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default CommentContainer;
