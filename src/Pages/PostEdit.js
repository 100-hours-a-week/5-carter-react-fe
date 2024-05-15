import Header from "../Components/Header/Header";
import PostInputContainer from "../Components/PostInputContainer/PostInputContainer";

function PostEdit() {
  return (
    <div className={"page"}>
      <Header showGoBack={true} showUserProfile={true} />
      <PostInputContainer
        page={"게시글 수정"}
        title={"제목1"}
        content={
          "위의 형태로 각자 차지하는 셀의 개수만큼 해당 위치에 이름을 써주면 됩니다.각 셀마다 공백을 하나씩 넣어서 구분해주시면 되고요.header는 첫번째 row에서 3개의 column을 차지하니 맨 위에 3번 쓴 것, 이해 되시죠?빈칸은 마침표 또는 “none”을 사용하면 되고, 마침표의 개수는 여러개를 써도 상관 없습니다."
        }
        button={"수정하기"}
      />
      <div style={{ height: "180px" }} />
    </div>
  );
}

export default PostEdit;
