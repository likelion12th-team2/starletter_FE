import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as MP from "../styles/StyledMP";
import axios from "axios";
import PetModal from "./PetModal";

const Managepet = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // 로그인 상태 확인 (예시: localStorage에 토큰이 있는지 확인)
    const token = localStorage.getItem("token");
    if (token) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
    }
  }, []);

  const [pets, setPets] = useState([]);

  const key = localStorage.getItem("token");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/pets/",
          {
            headers: {
              Authorization: `Token ${key}`, // 필요한 경우 인증 헤더 추가
            },
          }
        );
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setErrorMessage("펫 목록을 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchPets();
  }, []);

  const goLogin = () => {
    navigate("/login");
  };

  const goHome = () => {
    navigate("/");
  };

  const goJoin = () => {
    navigate("/join");
  };

  const goFun = () => {
    navigate("/funeral");
  };

  const goMarket = () => {
    navigate("/market");
  };

  const goMyBook = () => {
    navigate("/mybook");
  };

  const goLib = () => {
    navigate("/library");
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
      navigate("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const openModal1 = (petId) => {
    // 특정 펫의 세부 정보를 가져오기 위해 API 요청
    console.log(`Opening modal for pet id: ${petId}`);
    axios
      .get(`http://127.0.0.1:8000/accounts/pets/${petId}/`, {
        headers: {
          Authorization: `Token ${key}`, // 인증 헤더 추가
        },
      })
      .then((response) => {
        console.log("Pet details fetched:", response.data);
        setSelectedPet(response.data);
        setModalIsOpen1(true);
      })
      .catch((error) => {
        console.error("There was an error fetching the pet details!", error);
      });
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
    setSelectedPet(null);
  };

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
        anchorRef={myPageRef}
      />
      <MP.Body>
        <div id="title">나의 반려동물 관리</div>
        <MP.List>
          {pets.map((pet) => (
            <MP.Pet key={pet.id}>
              <img
                id="img"
                src={pet.petImage || "default-image-url.jpg"}
                alt="photo"
                onClick={() => openModal1(pet.id)}
              />
              <div id="name">{pet.petName}</div>
            </MP.Pet>
          ))}
        </MP.List>

        <PetModal
          isOpen={modalIsOpen1}
          onClose={closeModal1}
          pet={selectedPet}
        />
      </MP.Body>
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
    </MP.Container>
  );
};

export default Managepet;
