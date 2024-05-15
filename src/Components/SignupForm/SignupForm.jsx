import React from "react";
import { Link } from "react-router-dom";

import styles from "./SignupForm.module.css";

import PageTitle from "../PageTitle/PageTitle";
import UserInputForm from "../UserInputForm/UserInputForm";
import HelperText from "../HelperText/HelperText";
import Button from "../Button/Button";

function SignUpForm() {
  return (
    <div className={styles.signupForm}>
      <PageTitle title="회원가입" />
      <div className={styles.profileForm}>
        <div className={styles.title}>프로필 사진</div>
        <HelperText text="help" />
        <div className={`${styles.circle} ${styles.centeredImage}`}>
          <div className={styles.cross}>+</div>
        </div>
      </div>
      <div className={styles.inputForm}>
        <UserInputForm
          inputTitle="이메일*"
          inputMessage=" 이메일을 입력하세요"
        ></UserInputForm>
        <HelperText text="help"></HelperText>
        <UserInputForm
          inputTitle="비밀번호*"
          inputMessage=" 비밀번호를 입력하세요"
        ></UserInputForm>
        <HelperText text="help"></HelperText>
        <UserInputForm
          inputTitle="비밀번호 확인*"
          inputMessage=" 비밀번호를 한번 더 입력하세요"
        ></UserInputForm>
        <HelperText text="help"></HelperText>
        <UserInputForm
          inputTitle="닉네임*"
          inputMessage=" 닉네임을 입력하세요"
        ></UserInputForm>
        <HelperText text="help"></HelperText>
        <Button long={true} buttonTitle="회원가입" />
        <div className={styles.loginLink}>
          <Link to="/">로그인하러 가기</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
