import React from "react";
import styles from "./Editpassword.module.css";
import PageTitle from "../PageTitle/PageTitle";
import UserInputForm from "../UserInputForm/UserInputForm";
import HelperText from "../HelperText/HelperText";
import Button from "../Button/Button";

function EditPassword() {
  return (
    <div className={styles.container}>
      <PageTitle title={"비밀번호수정"} />
      <div style={{ height: "80px" }} />
      <UserInputForm
        inputTitle={"비밀번호"}
        inputMessage={"비밀번호를 입력하세요"}
      />
      <HelperText text={"help"} />
      <UserInputForm
        inputTitle={"비밀번호확인"}
        inputMessage={"비밀번호를 한번 더 입력하세요"}
      />
      <HelperText text={"help"} />
      <Button long={true} buttonTitle={"수정하기"} />
    </div>
  );
}

export default EditPassword;
