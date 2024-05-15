import React from "react";
import styles from "./PostDetailContainer.module.css";

function PostDetailContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>제목1</div>
      <div className={styles.postContainer}>
        <div className={styles.postInfo}>
          <img className={styles.userProfile} src="/images/beach.jpg" />
          <span className={styles.writer}>더미작성자1</span>
          <span className={styles.time}>0000-00-00 00:00:00</span>
        </div>
        <div className={styles.postActions}>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <hr style={{ marginBottom: "20px", opacity: 0.7 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img className={styles.postImage} src="/images/beach.jpg" />
        <div className={styles.postContent}>
          부유했을 때는 친구를 사귀기 쉽지만, 어려울 때는 눈을 씻고 찾아봐도
          친구를 찾기 어렵다. 누군가 진정한 우정을 나누고 있다 할지라도 그
          우정을 지키려면 오랜 시간이 걸린다. 짧은 시간 안에 많은 친구를 얻기란
          불가능하다. 왜냐하면 그들은 진정한 친구가 아니기 때문이다. 친구란
          말하자면 또 하나의 자신이다. 친구를 보면 그 사람을 알 수 있다. 현명한
          사람과 어리석은 사람은 서로 어울리지 않는다. 친구는 나를 동정하는 자가
          아니라 나를 돕는 자다. 서로가 고통을 덜어 주지 않는다면 우리는 무엇을
          위해 사는 것일까? 우리는 모두 적막한 세계를 떠도는 나그네다. 그
          여정에서 찾을 수 있는 최고의 선물은 바로 믿음직한 벗이다. 좋은 벗은
          충격을 덜어주는 완충장치와도 같은 것이며 인생의 길에서 충동을 피할 수
          있도록 도와준다. [출처] 좋은 긴글 모음(우정,용서,침묵,충고) |작성자
          평화둥이부유했을 때는 친구를 사귀기 쉽지만, 어려울 때는 눈을 씻고
          찾아봐도 친구를 찾기 어렵다. 누군가 진정한 우정을 나누고 있다 할지라도
          그 우정을 지키려면 오랜 시간이 걸린다. 짧은 시간 안에 많은 친구를
          얻기란 불가능하다. 왜냐하면 그들은 진정한 친구가 아니기 때문이다.
          친구란 말하자면 또 하나의 자신이다. 친구를 보면 그 사람을 알 수 있다.
          현명한 사람과 어리석은 사람은 서로 어울리지 않는다. 친구는 나를
          동정하는 자가 아니라 나를 돕는 자다. 서로가 고통을 덜어 주지 않는다면
          우리는 무엇을 위해 사는 것일까? 우리는 모두 적막한 세계를 떠도는
          나그네다. 그 여정에서 찾을 수 있는 최고의 선물은 바로 믿음직한 벗이다.
          좋은 벗은 충격을 덜어주는 완충장치와도 같은 것이며 인생의 길에서
          충동을 피할 수 있도록 도와준다. [출처] 좋은 긴글
          모음(우정,용서,침묵,충고) |작성자 평화둥이부유했을 때는 친구를 사귀기
          쉽지만, 어려울 때는 눈을 씻고 찾아봐도 친구를 찾기 어렵다. 누군가
          진정한 우정을 나누고 있다 할지라도 그 우정을 지키려면 오랜 시간이
          걸린다. 짧은 시간 안에 많은 친구를 얻기란 불가능하다. 왜냐하면 그들은
          진정한 친구가 아니기 때문이다. 친구란 말하자면 또 하나의 자신이다.
          친구를 보면 그 사람을 알 수 있다. 현명한 사람과 어리석은 사람은 서로
          어울리지 않는다. 친구는 나를 동정하는 자가 아니라 나를 돕는 자다.
          서로가 고통을 덜어 주지 않는다면 우리는 무엇을 위해 사는 것일까?
          우리는 모두 적막한 세계를 떠도는 나그네다. 그 여정에서 찾을 수 있는
          최고의 선물은 바로 믿음직한 벗이다. 좋은 벗은 충격을 덜어주는
          완충장치와도 같은 것이며 인생의 길에서 충동을 피할 수 있도록 도와준다.
          [출처] 좋은 긴글 모음(우정,용서,침묵,충고) |작성자 평화둥이
        </div>
      </div>
      <div className={styles.counts}>
        <div className={styles.count}>
          <div>123</div>
          <div>조회수</div>
        </div>
        <div className={styles.count}>
          <div>333</div>
          <div>댓글</div>
        </div>
      </div>
      <hr style={{ opacity: 0.7 }} />
    </div>
  );
}

export default PostDetailContainer;
