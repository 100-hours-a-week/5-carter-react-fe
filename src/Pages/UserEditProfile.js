import EditProfile from "../Components/EditProfile/EditProfile";
import Header from "../Components/Header/Header";

function UserEditProfile() {
  return (
    <div>
      <Header showGoBack={false} showUserProfile={true} />
      <div style={{ height: "150px" }} />
      <EditProfile />
    </div>
  );
}

export default UserEditProfile;
