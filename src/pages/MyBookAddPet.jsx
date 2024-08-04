import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as AP from "../styles/styledMyBookAddPet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const MyBookAddPet = ({ nickname }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePicker1, setShowDatePicker1] = useState(false);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBirth, setPetBirth] = useState(null);
  const [petAnniv, setPetAnniv] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const [profileImage, setProfileImage] = useState(
    `${process.env.PUBLIC_URL}/static/images/ProfileImg.svg`
  );
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleDateChange = (date) => {
    setPetBirth(date);
    setShowDatePicker(false); // 날짜 선택 시 달력 닫기
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!petName || !petType || !petBirth || !petAnniv) {
      alert("모든 필드를 작성해 주세요.");
      return;
    }

    const formattedPetBirth = petBirth
      ? petBirth
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\./g, "-")
          .replace(/ /g, "")
          .replace(/-$/, "")
      : "";

    const formattedPetAnniv = petAnniv
      ? petAnniv
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\./g, "-")
          .replace(/ /g, "")
          .replace(/-$/, "")
      : "";

    try {
      const formData = new FormData();
      formData.append("petName", petName);
      formData.append("petBirth", formattedPetBirth);
      formData.append("petAnniv", formattedPetAnniv);
      formData.append("petType", petType);
      if (file) {
        formData.append("petImage", file);
      }

      await axios.post(
        `${process.env.REACT_APP_API_URL}/accounts/pets/` ||
          `http://127.0.0.1:8000/accounts/pets/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // 토큰을 로컬 스토리지에 저장합니다.
      localStorage.setItem("token", token);

      // 토큰을 상태로 전달하면서 페이지를 이동합니다.
      navigate(`/mybook/make`, { state: { token } });
    } catch (error) {
      console.log(`추가 실패: ${error.message}`);
      console.log(error.response.data);
    }
  };

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
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

  // 내서재 수정
  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        // 동물 있는지 없는지 판별
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/mybooks/list/` ||
            `http://127.0.0.1:8000/mybooks/list/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log("API 응답:", response.data); // 응답 데이터 로그 출력
        if (
          response.data.books.length > 0 ||
          response.data.petsNoBook.length > 0
        ) {
          navigate(`/mybook/make`); // 동물은 있는데 책이 없거나, 책도 있는 경우
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
        `${process.env.REACT_APP_API_URL}/accounts/logout/` ||
          `http://127.0.0.1:8000/accounts/logout/`,
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

  const profile = {
    name: nickname,
  };

  const [showTypeList, setShowTypeList] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const toggleTypeList = () => {
    setShowTypeList(!showTypeList);
  };

  const selectType = (type) => {
    setSelectedType(type);
    setPetType(type);
    setShowTypeList(false);
  };

  const datePickerRef = useRef(null);
  const datePickerRef1 = useRef(null);

  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setShowDatePicker(false);
    }
    if (
      datePickerRef1.current &&
      !datePickerRef1.current.contains(event.target)
    ) {
      setShowDatePicker1(false);
    }
  };

  useEffect(() => {
    if (showDatePicker || showDatePicker1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker, showDatePicker1]);

  return (
    <AP.Container>
      <header>
        <AP.Nav>
          <AP.NavContent>
            <AP.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
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
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <form onSubmit={handleSubmit}>
        <AP.Body>
          <AP.Title>아직 등록한 반려동물이 없어요</AP.Title>
          <AP.ProImg>
            <img id="profile" src={profileImage} alt="프로필" />
            <label htmlFor="fileInput">
              <img
                id="edit"
                src={`${process.env.PUBLIC_URL}/static/images/EditProfile.svg`}
                alt="편집"
              />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </AP.ProImg>
          <AP.Profile>
            <AP.Name>
              <div id="name">이름</div>
              <AP.NameBox>
                <input
                  id="namebox"
                  type="text"
                  placeholder="반려동물의 이름을 입력해 주세요"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  required
                />
              </AP.NameBox>
            </AP.Name>
            <AP.Type>
              <div id="type">타입</div>
              <AP.TypeBox>
                <input
                  id="typebox"
                  type="text"
                  placeholder="반려동물의 종을 선택해 주세요"
                  value={selectedType}
                  onChange={(e) => setPetType(e.target.value)}
                  readOnly
                  required
                />
                <img
                  id="plustype"
                  src={`${process.env.PUBLIC_URL}/static/images/Plustype.svg`}
                  alt="더보기"
                  onClick={toggleTypeList}
                />
                {showTypeList && (
                  <AP.TypeList>
                    {["강아지", "고양이", "소동물", "기타"].map((type) => (
                      <label key={type}>
                        <input
                          type="checkbox"
                          onClick={() => selectType(type)}
                        />
                        {type}
                      </label>
                    ))}
                  </AP.TypeList>
                )}
              </AP.TypeBox>
            </AP.Type>
            <AP.Birth>
              <div id="birthday">생일</div>
              <AP.BirthBox>
                <input
                  id="birthbox"
                  type="text"
                  placeholder="연도-월-일"
                  value={petBirth ? petBirth.toLocaleDateString() : ""}
                  readOnly
                  required
                />
                <img
                  id="birthcal"
                  src={`${process.env.PUBLIC_URL}/static/images/Calender.svg`}
                  alt="달력"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
                {showDatePicker && (
                  <AP.DatePickerWrapper ref={datePickerRef}>
                    <DatePicker
                      selected={petBirth}
                      onChange={handleDateChange}
                      inline
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </AP.DatePickerWrapper>
                )}
              </AP.BirthBox>
            </AP.Birth>
            <AP.Memorial>
              <div id="memorial">기일</div>
              <AP.MemorialBox>
                <input
                  id="memorialbox"
                  type="text"
                  placeholder="연도-월-일"
                  value={petAnniv ? petAnniv.toLocaleDateString() : ""}
                  readOnly
                  required
                />
                <img
                  id="memcal"
                  src={`${process.env.PUBLIC_URL}/static/images/Calender.svg`}
                  alt="달력"
                  onClick={() => setShowDatePicker1(!showDatePicker1)}
                />
                {showDatePicker1 && (
                  <AP.DatePickerWrapper1 ref={datePickerRef1}>
                    <DatePicker
                      selected={petAnniv}
                      onChange={(date1) => {
                        setPetAnniv(date1);
                        setShowDatePicker1(false);
                      }}
                      inline
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </AP.DatePickerWrapper1>
                )}
              </AP.MemorialBox>
            </AP.Memorial>
          </AP.Profile>
          <AP.Button>
            <button type="submit" id="btn">
              추가하기
            </button>
          </AP.Button>
        </AP.Body>
      </form>
      <footer>
        <AP.Footer>
          <AP.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <AP.Git>
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
            </AP.Git>
          </AP.Introduction>
        </AP.Footer>
      </footer>
    </AP.Container>
  );
};

export default MyBookAddPet;
