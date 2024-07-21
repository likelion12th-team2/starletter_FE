import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as MP from "../styles/StyledMP";
import axios from "axios";

const Managepet = ({ nickname }) => {
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
  const [pets, setPets] = useState([]);

  const [current, setCurrent] = useState(0);
  const nextpet = () => {
    setCurrent((prev) => (prev + 1) % pets.length);
  };
  const prevpet = () => {
    setCurrent((prev) => (prev - 1 + pets.length) % pets.length);
  };
  const showButtons = pets.length > 1;

  const goLogin = () => {
    navigate("/login");
  };

  const goHome = () => {
    navigate(`/`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
  };

  const goMyBook = () => {
    navigate(`/mybook`);
  };

  const goLib = () => {
    navigate(`/library`);
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
      navigate("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/pets/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        localStorage.setItem("token", response.data.key);
        setPets(response.data);
      } catch (error) {
        console.error(
          "조회불가: ",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchPets();
  }, []);

  return (
    <MP.Container>
      <header>
        <MP.Nav>
          <MP.NavContent>
            <MP.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MP.Logo>
            <MP.Menu>
              <MP.MovingContent>
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
              </MP.MovingContent>
              <div id="bar"> | </div>
              <MP.Account>
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
              </MP.Account>
            </MP.Menu>
          </MP.NavContent>
        </MP.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <body>
        <MP.BodyContainer>
          <div id="title">나의 반려동물 관리</div>
          <MP.Slider>
            <MP.SlideButton onClick={prevpet}>
              <img
                src={`${process.env.PUBLIC_URL}/images/Back.svg`}
                alt="Previous"
              />
            </MP.SlideButton>
            <MP.BookContainer>
              {pets.map((pet, index) => {
                let large = index === current;
                let small =
                  (index === (current + 1) % pets.length &&
                    current !== pets.length - 1) ||
                  (index === (current - 1 + pets.length) % pets.length &&
                    current !== 0);
                let next =
                  index === (current + 1) % pets.length &&
                  current !== pets.length - 1;
                let prev =
                  index === (current - 1 + pets.length) % pets.length &&
                  current !== 0;
                let hidden = !(large || small);

                if (pets.length === 1) {
                  large = true;
                  small = false;
                  next = false;
                  prev = false;
                  hidden = false;
                }

                return (
                  <MP.Book
                    key={pet.id}
                    className={`${large ? "large" : ""} ${
                      small ? "small" : ""
                    } ${next ? "next" : ""} ${prev ? "prev" : ""} ${
                      hidden ? "hidden" : ""
                    }`}
                  >
                    <img id="img" src={pet.petImage} alt={pet.petName} />
                    <div id="name">{pet.petName}</div>
                    <div id="date">
                      {pet.petBirth}~{pet.petAnniv}
                    </div>
                    <button id="bookbtn">서재 바로가기</button>
                  </MP.Book>
                );
              })}
            </MP.BookContainer>
            <MP.SlideButton onClick={nextpet} show={showButtons}>
              <img src={`${process.env.PUBLIC_URL}/images/Next.svg`} />
            </MP.SlideButton>
          </MP.Slider>
        </MP.BodyContainer>
      </body>
      <footer>
        <MP.Footer>
          <MP.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </MP.Introduction>
        </MP.Footer>
      </footer>
    </MP.Container>
  );
};

export default Managepet;
