import Header from "../Components/Header/Header";
import PostInputContainer from "../Components/PostInputContainer/PostInputContainer";

function PostCreate() {
  return (
    <div className={"page"}>
      <Header showGoBack={true} showUserProfile={true} />
      <PostInputContainer
        page={"게시글 작성"}
        title={"제목을 입력해주세요. (최대 26글자)"}
        content={"내용을 입력해주세요."}
        button={"완료"}
      />
      <div style={{ height: "180px" }} />
    </div>
  );
}

export default PostCreate;
