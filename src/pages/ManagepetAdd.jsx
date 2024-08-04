import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as A from "../styles/StyledManagepetAdd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const ManagePetAdd = ({ nickname }) => {
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
    `${process.env.PUBLIC_URL}/images/ProfileImg.svg`
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

  const handleAnnivChange = (date) => {
    setPetAnniv(date);
    setShowDatePicker1(false); // 날짜 선택 시 달력 닫기
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

      navigate(`/mypage/managepet`);
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
        console.error("동물 기록 확인 실패:");
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
    <A.Container>
      <header>
        <A.Nav>
          <A.NavContent>
            <A.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </A.Logo>
            <A.Menu>
              <A.MovingContent>
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
              </A.MovingContent>
              <div id="bar"> | </div>
              <A.Account>
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
              </A.Account>
            </A.Menu>
          </A.NavContent>
        </A.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <form onSubmit={handleSubmit}>
        <A.Body>
          <A.Title>아직 등록한 반려동물이 없어요</A.Title>
          <A.ProImg>
            <img id="profile" src={profileImage} alt="프로필" />
            <label htmlFor="fileInput">
              <img
                id="edit"
                src={`${process.env.PUBLIC_URL}/images/EditProfile.svg`}
                alt="편집"
              />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </A.ProImg>
          <A.Profile>
            <A.Name>
              <div id="name">이름</div>
              <A.NameBox>
                <input
                  id="namebox"
                  type="text"
                  placeholder="반려동물의 이름을 입력해 주세요"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  required
                />
              </A.NameBox>
            </A.Name>
            <A.Type>
              <div id="type">타입</div>
              <A.TypeBox>
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
                  src={`${process.env.PUBLIC_URL}/images/Plustype.svg`}
                  alt="더보기"
                  onClick={toggleTypeList}
                />
                {showTypeList && (
                  <A.TypeList>
                    {["강아지", "고양이", "소동물", "기타"].map((type) => (
                      <label key={type}>
                        <input
                          type="checkbox"
                          onClick={() => selectType(type)}
                        />
                        {type}
                      </label>
                    ))}
                  </A.TypeList>
                )}
              </A.TypeBox>
            </A.Type>
            <A.Birth>
              <div id="birthday">생일</div>
              <A.BirthBox>
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
                  src={`${process.env.PUBLIC_URL}/images/Calender.svg`}
                  alt="달력"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
                {showDatePicker && (
                  <A.DatePickerWrapper ref={datePickerRef}>
                    <DatePicker
                      selected={petBirth}
                      onChange={handleDateChange}
                      inline
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </A.DatePickerWrapper>
                )}
              </A.BirthBox>
            </A.Birth>
            <A.Memorial>
              <div id="memorial">기일</div>
              <A.MemorialBox>
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
                  src={`${process.env.PUBLIC_URL}/images/Calender.svg`}
                  alt="달력"
                  onClick={() => setShowDatePicker1(!showDatePicker1)}
                />
                {showDatePicker1 && (
                  <A.DatePickerWrapper1 ref={datePickerRef1}>
                    <DatePicker
                      selected={petAnniv}
                      onChange={handleAnnivChange}
                      inline
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </A.DatePickerWrapper1>
                )}
              </A.MemorialBox>
            </A.Memorial>
          </A.Profile>
          <A.Button>
            <button type="submit" id="btn">
              추가하기
            </button>
          </A.Button>
        </A.Body>
      </form>
      <footer>
        <A.Footer>
          <A.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <A.Git>
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
            </A.Git>
          </A.Introduction>
        </A.Footer>
      </footer>
    </A.Container>
  );
};

export default ManagePetAdd;
