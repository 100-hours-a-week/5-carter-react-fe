import CommentsList from "../Components/CommentsList/CommentsList";
import Header from "../Components/Header/Header";
import PostDetailContainer from "../Components/PostDetailContainer/PostDetailContainer";

function PostDetail() {
  return (
    <div>
      <Header showGoBack={true} showUserProfile={true} />
      <PostDetailContainer />
      <CommentsList />
    </div>
  );
}

export default PostDetail;
