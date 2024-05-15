import EditPassword from "../Components/EditPassword/EditPassword";
import Header from "../Components/Header/Header";

function UserEditPassword() {
  return (
    <div>
      <Header showGoBack={false} showUserProfile={true} />
      <div style={{ height: "180px" }} />
      <EditPassword />
    </div>
  );
}

export default UserEditPassword;
