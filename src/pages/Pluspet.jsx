import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as P from "../styles/StyledPluspet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// 환경 변수나 다른 방법으로 백엔드 URL을 설정하는 부분입니다.
const BACKEND_URL = "http://127.0.0.1:8000" || "http://3.34.187.40";

const Pluspet = ({ nickname }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePicker1, setShowDatePicker1] = useState(false);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);

  const [petName, setPet_Name] = useState("");
  const [petType, setPetType] = useState("");
  const [pet_birth1, setPet_Birth] = useState(null);
  const [pet_anniv1, setPet_Anniv] = useState(null);
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
    setPet_Birth(date);
    setShowDatePicker(false); // 날짜 선택 시 달력 닫기//
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!petName || !selectedType || !pet_birth1 || !pet_anniv1) {
      alert("모든 필드를 작성해 주세요.");
      return;
    }

    const petBirth = pet_birth1
      ? pet_birth1
          .toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\./g, "-")
          .replace(/ /g, "")
          .replace(/-$/, "")
      : "";

    const petAnniv = pet_anniv1
      ? pet_anniv1
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
      formData.append("petBirth", petBirth);
      formData.append("petAnniv", petAnniv);
      formData.append("petType", petType);
      if (file) {
        formData.append("petImage", file);
      }

      await axios.post(`${BACKEND_URL}/accounts/pets/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("token", token);
      navigate(`/mypage/managepet`, { state: { token } });
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

  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        const response = await axios.get(`${BACKEND_URL}/mybooks/list/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        // console.log("API 응답:", response.data); // 응답 데이터 로그 출력
        if (
          response.data.books.length > 0 ||
          response.data.petsNoBook.length > 0
        ) {
          navigate(`/mybook/make`);
        } else {
          navigate(`/mybook/addpet`);
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
        `${BACKEND_URL}/accounts/logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
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
    <P.Container>
      <header>
        <P.Nav>
          <P.NavContent>
            <P.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
                alt="logo"
              />
            </P.Logo>
            <P.Menu>
              <P.MovingContent>
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
              </P.MovingContent>
              <div id="bar"> | </div>
              <P.Account>
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
              </P.Account>
            </P.Menu>
          </P.NavContent>
        </P.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <form onSubmit={handleSubmit}>
        <P.Body>
          <P.Title>새로 추가할 반려동물의 정보를 입력하세요</P.Title>
          <P.ProImg>
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
          </P.ProImg>
          <P.Profile>
            <P.Name>
              <div id="name">이름</div>
              <P.NameBox>
                <input
                  id="namebox"
                  type="text"
                  placeholder="반려동물의 이름을 입력해 주세요"
                  value={petName}
                  onChange={(e) => setPet_Name(e.target.value)}
                  required
                />
              </P.NameBox>
            </P.Name>
            <P.Type>
              <div id="type">타입</div>
              <P.TypeBox>
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
                  <P.TypeList>
                    {["강아지", "고양이", "소동물", "기타"].map((type) => (
                      <label key={type}>
                        <input
                          type="checkbox"
                          onClick={() => selectType(type)}
                        />
                        {type}
                      </label>
                    ))}
                  </P.TypeList>
                )}
              </P.TypeBox>
            </P.Type>
            <P.Birth>
              <div id="birthday">생일</div>
              <P.BirthBox>
                <input
                  id="birthbox"
                  type="text"
                  placeholder="연도-월-일"
                  value={pet_birth1 ? pet_birth1.toLocaleDateString() : ""}
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
                  <P.DatePickerWrapper ref={datePickerRef}>
                    <DatePicker
                      selected={pet_birth1}
                      onChange={handleDateChange}
                      inline
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </P.DatePickerWrapper>
                )}
              </P.BirthBox>
            </P.Birth>
            <P.Memorial>
              <div id="memorial">기일</div>
              <P.MemorialBox>
                <input
                  id="memorialbox"
                  type="text"
                  placeholder="연도-월-일"
                  value={pet_anniv1 ? pet_anniv1.toLocaleDateString() : ""}
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
                  <P.DatePickerWrapper1 ref={datePickerRef1}>
                    <DatePicker
                      selected={pet_anniv1}
                      onChange={(date1) => {
                        setPet_Anniv(date1);
                        setShowDatePicker1(false);
                      }}
                      inline
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </P.DatePickerWrapper1>
                )}
              </P.MemorialBox>
            </P.Memorial>
          </P.Profile>
          <P.Button>
            <button type="submit" id="btn">
              추가하기
            </button>
          </P.Button>
        </P.Body>
      </form>
      <footer>
        <P.Footer>
          <P.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <P.Git>
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
            </P.Git>
          </P.Introduction>
        </P.Footer>
      </footer>
    </P.Container>
  );
};

export default Pluspet;
