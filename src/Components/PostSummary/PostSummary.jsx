import React from "react";
import styles from "./PostSummary.module.css";

function PostSummary({ post }) {
  return (
    <div className={styles.postSummary}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.allElement}>
        <span className={styles.leftElement}>
          좋아요 {post.like} 댓글 {post.comment} 조회수 {post.hit}
        </span>
        <span className={styles.rightElement}>{post.time}</span>
      </div>
      <hr />
      <div className={styles.author}>
        <img className={styles.authorImage} src="/images/beach.jpg" />
        <div>{post.author}</div>
      </div>
    </div>
  );
}

export default PostSummary;
