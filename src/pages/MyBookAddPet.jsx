import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as AP from "../styles/styledMyBookAddPet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MyPageModal from "./MyPageModal";

const MyBookAddPet = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

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

  const goMyBookDetail = () => {
    navigate(`/mybook/detail`);
  };

  const goFun = () => {
    navigate(`/funeral`);
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

  const goMyBookMake = () => {
    navigate(`/mybook/make`);
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

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  // 생일 날짜 선택
  const [birthDate, setBirthDate] = useState(null);
  const [fixedDate, setFixedDate] = useState(null);

  return (
    <AP.Container>
      <header>
        <AP.Nav>
          <AP.NavContent>
            <AP.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </AP.Logo>
            <AP.Menu>
              <AP.MovingContent>
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
              </AP.MovingContent>
              <div id="bar"> | </div>
              <AP.Account>
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
              </AP.Account>
            </AP.Menu>
          </AP.NavContent>
        </AP.Nav>
      </header>

      {/*  */}
      <body>
        <AP.bodyContainer>
          <AP.Title>아직 등록한 반려동물이 없어요</AP.Title>
          <AP.Input>
            <AP.PetName>
              <div id="petName">반려동물 이름</div>
              <input
                id="petNameInput"
                type="text"
                placeholder="반려동물의 이름을 입력해 주세요"
              />
            </AP.PetName>
            <AP.Birth>
              <div id="birth">생일</div>
              <div id="DatePickerWrap">
                <DatePicker
                  dateFormat="yyyy.MM.dd" // 날짜 형태
                  shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                  maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  customInput={<AP.DatePickerInput />} // styled-components로 감싼 커스텀>
                  placeholderText="연도-월-일"
                />
                <img
                  id="dateIcon"
                  src={`${process.env.PUBLIC_URL}/images/calendar.png`}
                  alt="calendar"
                />
              </div>
            </AP.Birth>
            <AP.FixedDate>
              <div id="fixedDate">기일</div>
              <div id="DatePickerWrap">
                <DatePicker
                  dateFormat="yyyy.MM.dd" // 날짜 형태
                  shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                  maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                  selected={fixedDate}
                  onChange={(date) => setFixedDate(date)}
                  customInput={<AP.DatePickerInput />} // styled-components로 감싼 커스텀>
                  placeholderText="연도-월-일"
                />
                <img
                  id="dateIcon"
                  src={`${process.env.PUBLIC_URL}/images/calendar.png`}
                  alt="calendar"
                />
              </div>
            </AP.FixedDate>
          </AP.Input>
          <AP.AddPetBtn>
            <button id="addPetBtn" onClick={goMyBookMake}>
              반려동물 추가
            </button>
          </AP.AddPetBtn>
        </AP.bodyContainer>
      </body>
      {/*  */}
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <footer>
        <AP.Footer>
          <AP.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </AP.Introduction>
        </AP.Footer>
      </footer>
    </AP.Container>
  );
};

export default MyBookAddPet;
