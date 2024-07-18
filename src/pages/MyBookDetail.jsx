import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as MB from "../styles/styledMyBookDetail";
import Modal from "react-modal";

const MyBookDetail = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const goMyBook = () => {
    navigate(`/MyBook`);
  };

  // 모달창 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
              <div id="library" onClick={goMyBook}>
                내 서재
              </div>
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
                  src={`${process.env.PUBLIC_URL}/images/mybookCover.png`}
                  alt="Mycover1"
                />
              </MB.BookCoverImg>
            </MB.BookCover>
            <MB.BookDetail>
              <div id="title">쪼꼬랑 누나 여행기록</div>
              <div id="writer">김별</div>
              <div id="writtendate">마지막 수정일: 2024.07.17</div>
              <div id="ps">
                쪼꼬는 12살 푸들할머니 그래도 내 눈에는 영원히 애기 산책나가면
                인기 짱 많은 아파트 인싸 강아지 12년간 이곳저곳 놀러다녔던
                기억을 모아🌈🐕
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
          <MB.Section>
            <div id="section"></div>
          </MB.Section>
          <MB.PostitWrap>
            <MB.PostitList>
              <MB.Postit onClick={openModal} id="postit1">
                쪼꼬야 이모도 보고싶다
              </MB.Postit>
            </MB.PostitList>
          </MB.PostitWrap>
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
