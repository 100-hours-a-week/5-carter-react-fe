import React from "react";
import styles from "./EditProfile.module.css";
import PageTitle from "../PageTitle/PageTitle";
import UserInputForm from "../UserInputForm/UserInputForm";
import HelperText from "../HelperText/HelperText";
import Button from "../Button/Button";

function EditProfile() {
  return (
    <div className={styles.container}>
      <PageTitle title={"회원정보수정"} />
      <div className={styles.title}>프로필 사진*</div>
      <div className={styles.imageContainer}>
        <img src="/images/beach.jpg" alt="Sample Image" />
        <div className={styles.overlayBox}>변경</div>
      </div>
      <div className={styles.title}>이메일</div>
      <div className={styles.email}>user@example.com</div>
      <UserInputForm inputTitle={"닉네임"} inputMessage={"유저1"} />
      <HelperText text={"help"} />
      <Button long={true} buttonTitle={"수정하기"} />
      <div className={styles.delete}>회원 탈퇴</div>
      <div className={styles.toast}>수정완료</div>
    </div>
  );
}

export default EditProfile;
