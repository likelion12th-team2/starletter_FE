import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as E from "../styles/StyledEdit";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [slr, setSlr] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    // 로그인 상태 확인 (예시: localStorage에 토큰이 있는지 확인)
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
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

  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        const response = await axios.get(`/mybooks/list/`, {
          headers: {
            Authorization: `Token ${key}`,
          },
        });
        console.log("API 응답:", response.data);
        if (
          response.data.books.length > 0 ||
          response.data.petsNoBook.length > 0
        ) {
          navigate(`/mybook/make`);
        } else {
          navigate(`/mybook/addpet`);
        }
      } catch (error) {
        console.error("동물 기록 확인 실패:", error);
      }
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
        `/accounts/logout/`,
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
      setIsLoggedIn(false);
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
        `/accounts/myinfo/`,
        {
          name: name || name1,
          nickname: nickname || slr,
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

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get(`/accounts/myinfo/`, {
          headers: {
            Authorization: `Token ${key}`, // 필요한 경우 인증 헤더 추가
          },
        });
        setName1(response.data.name);
        setSlr(response.data.nickname);
      } catch (error) {
        console.error("Error fetching name:", error);
        setErrorMessage("사용자 이름을 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchName();
  }, [key]);

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
          <E.Title>안녕하세요, {name1} 님</E.Title>
          <E.Profile>
            <E.Name>
              <div id="name">이름</div>
              <E.DetName>
                <input
                  id="inname"
                  type="text"
                  value={name || name1}
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
                  value={nickname || slr}
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
            <E.Git>
              <img
                id="github"
                src={`${process.env.PUBLIC_URL}/images/Github.png`}
                alt="깃허브"
              />
              <a
                id="gitback"
                href="https://github.com/likelion12th-team2/starletter_BE"
                target="_blank"
                rel="noopener noreferrer"
              >
                BE
              </a>
              <div id="slash"> / </div>
              <a
                id="gitfront"
                href="https://github.com/likelion12th-team2/starletter_FE"
                target="_blank"
                rel="noopener noreferrer"
              >
                FE
              </a>
            </E.Git>
          </E.Introduction>
        </E.Footer>
      </footer>
    </E.Container>
  );
};

export default EditProfile;
