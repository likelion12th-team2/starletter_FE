import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as F from "../styles/StyledFuneral";
import FuneralModal from "./FuneralModal";
import axios from "axios";

const Funeral = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

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

  const goMyBook = () => {
    navigate(`/mybook`);
  };

  const goLib = () => {
    navigate(`/library`);
  };

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/logout/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 저장된 토큰 사용
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

  return (
    <F.Container>
      <header>
        <F.Nav>
          <F.NavContent>
            <F.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </F.Logo>
            <F.Menu>
              <F.MovingContent>
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
              </F.MovingContent>
              <div id="bar"> | </div>
              <F.Account>
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
              </F.Account>
            </F.Menu>
          </F.NavContent>
        </F.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <F.Body>
        <F.Search>
          <input
            id="detail"
            type="text"
            placeholder="지역이나 키워드를 검색해 보세요"
          />
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search.svg`}
            alt="검색"
          />
        </F.Search>
        <F.Ad></F.Ad>
        <F.Title>수도권 반려동물 전문 장례식장을 보여드릴게요</F.Title>
        <F.FunList>
          <F.Fun1 onClick={showModal}>
            <img
              id="img1"
              src={`${process.env.PUBLIC_URL}/images/Fun1.svg`}
              alt="장례식장"
            />
            <div id="name1">더포에버</div>
            <div id="loc1">인천 서구 설원로 79</div>
          </F.Fun1>
          <F.Fun2>
            <img
              id="img2"
              src={`${process.env.PUBLIC_URL}/images/Fun1.svg`}
              alt="장례식장"
            />
            <div id="name2">더포에버</div>
            <div id="loc2">인천 서구 설원로 79</div>
          </F.Fun2>
          <F.Fun3>
            <img
              id="img3"
              src={`${process.env.PUBLIC_URL}/images/Fun1.svg`}
              alt="장례식장"
            />
            <div id="name3">더포에버</div>
            <div id="loc3">인천 서구 설원로 79</div>
          </F.Fun3>
        </F.FunList>
      </F.Body>
      <FuneralModal show={show} handleClose={hideModal} />
      <footer>
        <F.Footer>
          <F.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </F.Introduction>
        </F.Footer>
      </footer>
    </F.Container>
  );
};

export default Funeral;
