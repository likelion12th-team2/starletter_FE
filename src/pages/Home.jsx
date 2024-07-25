import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as H from "../styles/StyledHome";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // useEffect(() => {
  //   // localStorage에 저장된 모든 항목을 콘솔에 출력
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     const value = localStorage.getItem(key);
  //     console.log(`Key: ${key}, Value: ${value}`);
  //   }
  // }, []);

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

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/logout/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`, // 헤더에 저장된 토큰 사용
          },
        }
      );
      console.log("로그아웃 성공:", response.data);
      // 로그아웃 성공 시 토큰 삭제 및 상태 업데이트
      localStorage.removeItem("token");
      localStorage.removeItem("key");
      setIsLoggedIn(false);
      setToken("");
      navigate(`/`);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const goHome = () => {
    navigate(`/`);
  };

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
  };

  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        // 동물 있는지 없는지 판별
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/pets/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log("API 응답:", response.data); // 응답 데이터 로그 출력

        if (response.data.length > 0) {
          navigate(`/mybook/make`); // 동물 있으면 책 만들기
        } else {
          navigate(`/mybook/addpet`); // 동물 없으면 동물 추가
        }
      } catch (error) {
        console.error("동물 기록 확인 실패:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const goLib = async () => {
    if (isLoggedIn) {
      navigate("/library");
    } else {
      navigate("/login");
    }
  };

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  return (
    <H.Container>
      <header>
        <H.Nav>
          <H.NavContent>
            <H.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </H.Logo>
            <H.Menu>
              <H.MovingContent>
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
              </H.MovingContent>
              <div id="bar"> | </div>
              <H.Account>
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
              </H.Account>
            </H.Menu>
          </H.NavContent>
        </H.Nav>
      </header>
      {/* 모달창 추가 */}
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        anchorRef={myPageRef}
      />
      {/*  */}
      <H.Body>
        <H.List>
          <H.Lib onClick={goMyBook}>
            <img
              id="library"
              src={`${process.env.PUBLIC_URL}/images/Lib.svg`}
              alt="서재"
            />
            <div id="detlib">내 서재</div>
          </H.Lib>
          <H.Book onClick={goLib}>
            <img
              id="bookroom"
              src={`${process.env.PUBLIC_URL}/images/Book.svg`}
              alt="책방"
            />
            <div id="detbook">책방</div>
          </H.Book>
          <H.Fun onClick={goFun}>
            <img
              id="funeral"
              src={`${process.env.PUBLIC_URL}/images/Lib.svg`}
              alt="장례식장"
            />
            <div id="detfun">장례식장</div>
          </H.Fun>
          <H.Mar onClick={goMarket}>
            <img
              id="market"
              src={`${process.env.PUBLIC_URL}/images/Lib.svg`}
              alt="마켓"
            />
            <div id="detmar">마켓</div>
          </H.Mar>
        </H.List>
        <img
          id="main"
          src={`${process.env.PUBLIC_URL}/images/Main.svg`}
          alt="메인"
        />
      </H.Body>
      <footer>
        <H.Footer>
          <H.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </H.Introduction>
        </H.Footer>
      </footer>
    </H.Container>
  );
};

export default Home;
