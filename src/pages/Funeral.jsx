import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as F from "../styles/StyledFuneral";
import FuneralModal from "./FuneralModal";
import axios from "axios";
import { BackButton } from "../styles/styledMyBookMake";

// 환경 변수나 다른 방법으로 백엔드 URL을 설정하는 부분입니다.
const BACKEND_URL = "http://127.0.0.1:8000" || "http://13.209.13.101";

const Funeral = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  const [show, setShow] = useState(false);
  const [selectedFuneral, setSelectedFuneral] = useState(null);
  const [funerals, setFunerals] = useState([]);

  const showModal = (funeral) => {
    setSelectedFuneral(funeral);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
    setSelectedFuneral(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    fetchInitialFunerals();
  }, []);

  const fetchInitialFunerals = async () => {
    try {

      console.log(
        "Fetching initial funerals data from URL:",
        BACKEND_URL,
        "/funeralhalls/"
      );
      const response = await axios.get(`${BACKEND_URL}/funeralhalls/`);
      console.log("Response data:", response.data);
      setFunerals(response.data);
    } catch (error) {
      console.error("초기 장례식장 데이터를 불러오는 중 오류 발생:", error);
    }
  };

  const fetchFunerals = async (query) => {
    try {

      console.log(
        "Fetching funerals with query:",
        query,
        "from URL:",
        BACKEND_URL
      );
      const response = await axios.get(`${BACKEND_URL}/funeralhalls/`, {
        params: { search: query },
      });
      console.log("Response data:", response.data);
      setFunerals(response.data);
    } catch (error) {
      console.error("검색 결과를 불러오는 중 오류 발생:", error);
    }
  };

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
        const storedToken = token || localStorage.getItem("token");
        if (!storedToken) {
          navigate("/login");
          return;
        }
        console.log("Fetching my book list from URL:", BACKEND_URL);
        const response = await axios.get(`${BACKEND_URL}/mybooks/list/`, {
          headers: {
            Authorization: `Token ${storedToken}`,
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
    navigate("/library");
  };

  const key = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      console.log("Logging out from URL:", BACKEND_URL);
      const response = await axios.post(
        `${BACKEND_URL}/accounts/logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${key}`,
          },
        }
      );
      console.log("로그아웃 성공:", response.data);
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

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showAd, setShowAd] = useState(true);
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchFunerals(searchTerm);
      setShowAd(false);
      setSearchMessage(`'${searchTerm}' 에 대한 검색 결과예요`);
    } else {
      fetchInitialFunerals();
      setShowAd(true);
      setSearchMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    fetchInitialFunerals();
    console.log(funerals);
  }, []);

  return (
    <F.Container>
      <header>
        <F.Nav>
          <F.NavContent>
            <F.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
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
        anchorRef={myPageRef}
      />
      <F.Body>
        <F.Search>
          <input
            id="detail"
            type="text"
            placeholder="지역이나 키워드를 검색해 보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/static/images/Search.svg`}
            alt="검색"
            onClick={handleSearch}
          />
        </F.Search>
        {showAd && (
          <F.Ad>
            <img
              src={`${process.env.PUBLIC_URL}/static/images/Advertisement.svg`}
              alt="광고내용"
            />
          </F.Ad>
        )}
        {searchMessage && <F.Title>{searchMessage}</F.Title>}
        <F.FunList>
          {funerals.map((funeral) => (
            <F.Fun1 key={funeral.id} onClick={() => showModal(funeral)}>
              <img id="img1" src={funeral.image} alt={funeral.name} />
              <div id="name1">{funeral.name}</div>
              <div id="loc1">{funeral.location}</div>
            </F.Fun1>
          ))}
        </F.FunList>
      </F.Body>
      <FuneralModal
        show={show}
        handleClose={hideModal}
        funeral={selectedFuneral}
      />
      <footer>
        <F.Footer>
          <F.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <F.Git>
              <img
                id="github"
                src={`${process.env.PUBLIC_URL}/static/images/Github.png`}
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
            </F.Git>
          </F.Introduction>
        </F.Footer>
      </footer>
    </F.Container>
  );
};

export default Funeral;
