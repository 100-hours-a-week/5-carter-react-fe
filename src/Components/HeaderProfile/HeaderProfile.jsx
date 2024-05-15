import React, { useState } from "react";
import styles from "./HeaderProfile.module.css";

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.container} ${props.show ? "" : styles.hidden}`}>
      <img
        src="/images/beach.jpg"
        alt="Dropdown Icon"
        onClick={toggleDropdown}
        className={styles.icon}
      />
      {isOpen && (
        <div className={styles.dropdown}>
          <button>회원정보수정</button>
          <button>비밀번호수정</button>
          <button>로그아웃</button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
