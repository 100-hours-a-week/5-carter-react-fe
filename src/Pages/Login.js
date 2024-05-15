import Header from "../Components/Header/Header";
import LoginForm from "../Components/LoginForm/LoginForm";
import Modal from "../Components/Modal/Modal";

function Login() {
  return (
    // <div className="page">
    //   <Header showGoBack={false} showUserProfile={false} />
    //   <div style={{ flex: 0.5 }} />
    //   <LoginForm />
    //   <div style={{ flex: 1 }} />
    // </div>
    <Modal
      msg1={"게시글을 삭제하시겠습니까?"}
      msg2={"삭제한 내용은 복구 할 수 없습니다."}
    />
  );
}

export default Login;
