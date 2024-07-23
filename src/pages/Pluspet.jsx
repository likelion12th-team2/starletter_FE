import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as P from "../styles/StyledPluspet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

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

  // useEffect(() => {
  //   // localStorage에 저장된 모든 항목을 콘솔에 출력
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     const value = localStorage.getItem(key);
  //     console.log(`Key: ${key}, Value: ${value}`);
  //   }
  // }, []);

  const handleDateChange = (date) => {
    setPet_Birth(date);
    setShowDatePicker(false); // 날짜 선택 시 달력 닫기
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    const petImage = file;

    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }

    // console.log(petName);
    // console.log(petBirth);
    // console.log(petAnniv);
    // console.log(petType);
    // console.log(petImage);

    const token = localStorage.getItem("token");
    console.log("사용할 토큰:", token);

    if (!token) {
      console.error("토큰이 localStorage에 없습니다.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("petName", petName);
      formData.append("petBirth", petBirth);
      formData.append("petAnniv", petAnniv);
      formData.append("petType", petType);
      formData.append("petImage", file);

      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/pets/",
        formData,
        {
          headers: {
            Authorization: "Token " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
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

  return (
    <P.Container>
      <header>
        <P.Nav>
          <P.NavContent>
            <P.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
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
          <P.Title>반려동물 추가</P.Title>
          <P.ProImg>
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
                />
                <img
                  id="plustype"
                  src={`${process.env.PUBLIC_URL}/images/Plustype.svg`}
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
                />
                <img
                  id="birthcal"
                  src={`${process.env.PUBLIC_URL}/images/Calender.svg`}
                  alt="달력"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
                {showDatePicker && (
                  <P.DatePickerWrapper>
                    <DatePicker
                      selected={pet_birth1}
                      onChange={handleDateChange}
                      inline
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
                />
                <img
                  id="memcal"
                  src={`${process.env.PUBLIC_URL}/images/Calender.svg`}
                  alt="달력"
                  onClick={() => setShowDatePicker1(!showDatePicker1)}
                />
                {showDatePicker1 && (
                  <P.DatePickerWrapper1>
                    <DatePicker
                      selected={pet_anniv1}
                      onChange={(date1) => {
                        setPet_Anniv(date1);
                        setShowDatePicker1(false);
                      }}
                      inline
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
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </P.Introduction>
        </P.Footer>
      </footer>
    </P.Container>
  );
};

export default Pluspet;
