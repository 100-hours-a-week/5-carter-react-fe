import React from "react";
import styles from "./PageTitle.module.css";

function PageTitle(props) {
  return <div className={styles.pageTitle}>{props.title}</div>;
}

export default PageTitle;
