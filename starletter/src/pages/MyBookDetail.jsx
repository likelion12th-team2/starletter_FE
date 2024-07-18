import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as MB from "../styles/styledMyBookDetail";

const MyBookDetail = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  return (
    <MB.Container>
      <header>
        <MB.Nav>
          <MB.NavContent>
            <MB.Logo>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MB.Logo>
            <MB.MovingContent>
              <div id="library">내 서재</div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </MB.MovingContent>
            <div id="bar"> | </div>
            <MB.Account>
              <div id="login" onClick={goLogin}>
                로그인
              </div>
              <div id="join" onClick={goJoin}>
                회원가입
              </div>
            </MB.Account>
          </MB.NavContent>
        </MB.Nav>
      </header>
      {/*  */}
      <body>
        <MB.BodyContainer>
          <MB.NewBook>
            <MB.BookCover>
              <MB.BookCoverText>
                <div id="title">쪼꼬랑 누나 여행기록</div>
                <div id="writer">김별</div>
              </MB.BookCoverText>
              <MB.BookCoverImg>
                <img
                  id="MycoverImg"
                  src={`${process.env.PUBLIC_URL}/images/Mycover1.png`}
                  alt="Mycover1"
                />
              </MB.BookCoverImg>
            </MB.BookCover>
            <MB.BookDetail>
              <div id="title">쪼꼬랑 누나 여행기록</div>
              <div id="writer">김별</div>
              <div id="writtendate">마지막 수정일: 2024.07.17</div>
              <div id="ps">
                제작년 봄이었나? 날이 풀려서 쪼꼬랑 노들섬 피크닉 갔던 날 엄마가
                사준 손수건 두르고 여기저기 뛰어다녔다 바구니에 자꾸 들어가려고
                해서 처음에는 안 된다고 했는데 귀여워서 냅뒀다.. 쪼꼬는 귀여워서
                모든게 용서되는듯 그니까 언니 놔두고 간 것두 용서할게 쪼꼬
                영.사.해. 영원히 사랑한다는 뜻
              </div>
            </MB.BookDetail>
          </MB.NewBook>
          <MB.MyBook>
            <MB.MyBookL></MB.MyBookL>
            <MB.MyBookR></MB.MyBookR>
          </MB.MyBook>
          <MB.WriteNewPage>
            <button id="writeNewPage">새 페이지 쓰기</button>
          </MB.WriteNewPage>
        </MB.BodyContainer>
      </body>
      {/*  */}
      <footer>
        <MB.Footer>
          <MB.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </MB.Introduction>
        </MB.Footer>
      </footer>
    </MB.Container>
  );
};

export default MyBookDetail;
