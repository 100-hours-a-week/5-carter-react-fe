import Header from "../Components/Header/Header";
import PostList from "../Components/PostList/PostList";

function Posts() {
  const data = [
    {
      title: "제목1",
      like: 10,
      comment: 20,
      hit: 30,
      time: "2021-01-01 00:00:00",
      author: "작성자1",
    },
    {
      title: "제목2",
      like: 40,
      comment: 120,
      hit: 130,
      time: "9999-99-99 99:99:99",
      author: "작성자2",
    },
    {
      title: "제목2",
      like: 40,
      comment: 120,
      hit: 130,
      time: "9999-99-99 99:99:99",
      author: "작성자2",
    },
    {
      title: "제목2",
      like: 40,
      comment: 120,
      hit: 130,
      time: "9999-99-99 99:99:99",
      author: "작성자2",
    },
  ];
  return (
    <div>
      <Header showGoBack={false} showUserProfile={true} />
      <PostList posts={data} />
      <div />
    </div>
  );
}

export default Posts;
