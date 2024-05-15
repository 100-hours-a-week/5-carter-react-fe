import React from "react";
import styles from "./PostList.module.css";
import PostSummary from "../PostSummary/PostSummary";
import Button from "../Button/Button";

function PostList({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>안녕하세요,</p>
        <p>
          아무 말 대잔치 <strong>게시판</strong> 입니다.
        </p>
        <br />
      </div>
      <div className={styles.buttonContainer}>
        <Button long={false} buttonTitle="게시글 작성" />
      </div>
      <br />
      {posts.map((post, index) => (
        <PostSummary key={index} post={post} />
      ))}
    </div>
  );
}

export default PostList;
