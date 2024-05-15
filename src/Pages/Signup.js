import Header from "../Components/Header/Header";
import SignUpForm from "../Components/SignupForm/SignupForm";

function Signup() {
  return (
    <div className="page">
      <Header showGoBack={true} showUserProfile={false} />
      <SignUpForm />
      <div />
    </div>
  );
}

export default Signup;
