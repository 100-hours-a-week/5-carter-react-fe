import React from "react";
import { Link } from "react-router-dom";

import styles from "./LoginForm.module.css";
import UserInputForm from "../UserInputForm/UserInputForm";
import Button from "../Button/Button";
import HelperText from "../HelperText/HelperText";
import PageTitle from "../PageTitle/PageTitle";

function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <PageTitle title={"로그인"} />
      <UserInputForm
        inputTitle={"이메일"}
        inputMessage={" 이메일을 입력하세요"}
      />
      <div style={{ height: "10px" }} />
      <UserInputForm
        inputTitle={"비밀번호"}
        inputMessage={" 비밀번호를 입력하세요"}
      />
      <HelperText text={"help"} />

      <Button long={true} buttonTitle={"로그인"} />
      <div className={styles.signupLink}>
        <Link to="/Signup">회원가입</Link>
      </div>
    </div>
  );
}

export default LoginForm;
