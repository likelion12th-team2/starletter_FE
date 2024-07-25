import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as E from "../styles/StyledEdit";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    // 로그인 상태 확인 (예시: localStorage에 토큰이 있는지 확인)
    const token = localStorage.getItem("token");
    if (token) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
    }
  }, []);

  const key = localStorage.getItem("token");

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

  const goMyBook = () => {
    if (isLoggedIn) {
      navigate("/mybook");
    } else {
      navigate("/login");
    }
  };

  const goLib = () => {
    if (isLoggedIn) {
      navigate("/library");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/logout/",
        {},
        {
          headers: {
            Authorization: `Token ${key}`, // 헤더에 저장된 토큰 사용
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

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출의 기본 동작 방지
    console.log("Form submitted"); // 폼 제출 로그 추가
    try {
      const response = await axios.put(
        "http://127.0.0.1:8000/accounts/myinfo/",
        {
          name: name,
          nickname: nickname,
        },
        {
          headers: {
            Authorization: `Token ${key}`, // 헤더에 저장된 토큰 사용
          },
        }
      );
      console.log("Profile updated:", response.data);
      setErrorMessage(""); // 성공적으로 업데이트된 경우 에러 메시지 초기화
      navigate(`/`);
    } catch (error) {
      console.error("Error response:", error.response);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        setErrorMessage(error.response.data.errorMessage); // 백엔드에서 받은 에러 메시지 설정
      } else {
        setErrorMessage("프로필 업데이트 중 오류가 발생했습니다."); // 일반적인 에러 메시지 설정
      }
    }
  };

  return (
    <E.Container>
      <header>
        <E.Nav>
          <E.NavContent>
            <E.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </E.Logo>
            <E.Menu>
              <E.MovingContent>
                <div id="library" onClick={goMyBook}>
                  서재
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
              </E.MovingContent>
              <div id="bar"> | </div>
              <E.Account>
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
              </E.Account>
            </E.Menu>
          </E.NavContent>
        </E.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        anchorRef={myPageRef}
      />
      <form onSubmit={handleSubmit}>
        <E.Body>
          <E.Title>안녕하세요, 님</E.Title>
          <E.Profile>
            <E.Name>
              <div id="name">이름</div>
              <E.DetName>
                <input
                  id="inname"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </E.DetName>
            </E.Name>
            <E.Nickname>
              <div id="nickname">닉네임</div>
              <E.DetNick>
                <input
                  id="innick"
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                />
              </E.DetNick>
            </E.Nickname>
          </E.Profile>
          {errorMessage && <E.ErrorMessage>{errorMessage}</E.ErrorMessage>}
          <E.Button>
            <button id="btn" type="submit">
              수정하기
            </button>
          </E.Button>
        </E.Body>
      </form>
      <footer>
        <E.Footer>
          <E.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </E.Introduction>
        </E.Footer>
      </footer>
    </E.Container>
  );
};

export default EditProfile;
