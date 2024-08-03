import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as MP from "../styles/StyledMP";
import axios from "axios";
import PetModal from "./PetModal";

const Managepet = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
    }
  }, [token]);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`/accounts/pets/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setPets(response.data);
        if (response.data.length === 0) {
          navigate("/mypage/managepet/pluspet");
        }
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, [token, navigate]);

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

  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        const storedToken = token || localStorage.getItem("token");
        if (!storedToken) {
          navigate("/login");
          return;
        }
        const response = await axios.get(`/mybooks/list/`, {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `/accounts/logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("로그아웃 성공:", response.data);
      localStorage.removeItem("token");
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
    console.log(`Opening modal for pet id: ${petId}`);
    axios
      .get(`/accounts/pets/${petId}/`, {
        headers: {
          Authorization: `Token ${token}`,
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
                alt="홈으로 이동"
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
                src={
                  pet.petImage ||
                  `${process.env.PUBLIC_URL}/images/default_pet_image.png`
                }
                alt={`${pet.petName} 사진`}
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
            alt="로고"
          />
          <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
          <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
          <MP.Git>
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
          </MP.Git>
        </MP.Introduction>
      </MP.Footer>
    </MP.Container>
  );
};

export default Managepet;
