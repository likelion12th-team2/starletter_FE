import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as MB from "../styles/StyledMB";
import { Nickname } from "../styles/StyledJoin";

const Mybook = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);

  useEffect(() => {
    // 로그인 상태 확인 (예시: localStorage에 토큰이 있는지 확인)
    const token = localStorage.getItem("token");
    if (token) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
    }
  }, []);

  const goHome = () => {
    navigate(`/`);
  };

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // 예시로 localStorage에 저장된 토큰을 삭제
    setIsLoggedIn(false);
    navigate(`/`);
  };

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  return (
    <MB.Container>
      <header>
        <MB.Nav>
          <MB.NavContent>
            <MB.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MB.Logo>
            <MB.MovingContent>
              <div id="library">서재</div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </MB.MovingContent>
            <div id="bar"> | </div>
            <MB.Account>
              {isLoggedIn ? (
                <>
                  <div id="mypage" onClick={openModal} ref={myPageRef}>
                    마이페이지
                  </div>
                  <div id="logout" onClick={handleLogout}>
                    로그아웃
                  </div>
                </>
              ) : (
                <>
                  <div id="login" onClick={goLogin}>
                    로그인
                  </div>
                  <div id="join" onClick={goJoin}>
                    회원가입
                  </div>
                </>
              )}
            </MB.Account>
          </MB.NavContent>
        </MB.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <MB.Body>
        <MB.Title>내 활동</MB.Title>
        <MB.Act>
          <MB.Sympathy>
            <MB.Heart>
              <img
                id="img"
                src={`${process.env.PUBLIC_URL}/images/Heart.svg`}
                alt="이미지"
              />
              <div id="heart">공감</div>
            </MB.Heart>
            <MB.Symlist>
              <MB.Book>
                <img
                  id="bookcover"
                  src={`${process.env.PUBLIC_URL}/images/Bookcover.svg`}
                  alt="표지"
                />
                <div id="title">보고 싶은 우리집 아기돼지</div>
              </MB.Book>
            </MB.Symlist>
          </MB.Sympathy>
          <MB.Comment>
            <MB.Detail>
              <img
                id="img"
                src={`${process.env.PUBLIC_URL}/images/Comment.svg`}
                alt="이미지"
              />
              <div id="comment">댓글</div>
            </MB.Detail>
            <MB.Comlist>
              <MB.Post>
                <div id="detail">
                  아기돼지야 너 정말 귀엽구나 너 덕분에 나도 행복해 고마워
                </div>
                <MB.Del>
                  <button id="btn">삭제</button>
                </MB.Del>
              </MB.Post>
            </MB.Comlist>
          </MB.Comment>
        </MB.Act>
      </MB.Body>
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

export default Mybook;
