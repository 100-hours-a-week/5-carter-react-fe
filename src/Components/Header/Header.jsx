import React from "react";
import styles from "./Header.module.css";
import HeaderProfile from "../HeaderProfile/HeaderProfile";

function Header(props) {
  return (
    <>
      <div>
        <div className={styles.header}>
          <img
            className={`${styles.goBack} ${props.showGoBack ? "" : styles.hidden}`}
            src="/images/goBack.png"
          />
          <div className={styles.headerTitle}>아무 말 대잔치</div>

          <HeaderProfile show={props.showUserProfile} />
        </div>
        <hr className={styles.headerLine} />
      </div>
    </>
  );
}

export default Header;
