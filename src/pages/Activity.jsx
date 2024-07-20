import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as A from "../styles/StyledMB";
import { Nickname } from "../styles/StyledJoin";

const Activity = ({ nickname }) => {
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

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMyBook = () => {
    navigate(`/mybook`);
  };

  const goLib = () => {
    navigate(`/library`);
  };

  const goMarket = () => {
    navigate(`/market`);
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
    <A.Container>
      <header>
        <A.Nav>
          <A.NavContent>
            <A.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </A.Logo>
            <A.Menu>
              <A.MovingContent>
                <div id="library" onClick={goMyBook}>
                  내 서재
                </div>
                <div id="bookroom" onClick={goLib}>
                  책방
                </div>
                <div id="comparison" onClick={goFun}>
                  장례식장 비교
                </div>
                <div id="market" onClick={goMarket}>
                  마켓
                </div>
              </A.MovingContent>
              <div id="bar"> | </div>
              <A.Account>
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
              </A.Account>
            </A.Menu>
          </A.NavContent>
        </A.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <A.Body>
        <A.Title>내 활동</A.Title>
        <A.Act>
          <A.Sympathy>
            <A.Heart>
              <img
                id="img"
                src={`${process.env.PUBLIC_URL}/images/Heart.svg`}
                alt="이미지"
              />
              <div id="heart">공감</div>
            </A.Heart>
            <A.Symlist>
              <A.Book>
                <img
                  id="bookcover"
                  src={`${process.env.PUBLIC_URL}/images/Bookcover.svg`}
                  alt="표지"
                />
                <div id="title">보고 싶은 우리집 아기돼지</div>
              </A.Book>
            </A.Symlist>
          </A.Sympathy>
          <A.Comment>
            <A.Detail>
              <img
                id="img"
                src={`${process.env.PUBLIC_URL}/images/Comment.svg`}
                alt="이미지"
              />
              <div id="comment">댓글</div>
            </A.Detail>
            <A.Comlist>
              <A.Post>
                <div id="detail">
                  아기돼지야 너 정말 귀엽구나 너 덕분에 나도 행복해 고마워
                </div>
                <A.Del>
                  <button id="btn">삭제</button>
                </A.Del>
              </A.Post>
            </A.Comlist>
          </A.Comment>
        </A.Act>
      </A.Body>
      <footer>
        <A.Footer>
          <A.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </A.Introduction>
        </A.Footer>
      </footer>
    </A.Container>
  );
};

export default Activity;
