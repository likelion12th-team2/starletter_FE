import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as MW from "../styles/styledMyBookWrite";
import axios from "axios";
import MyPageModal from "./MyPageModal";

const MyBookWrite = ({ nickname }) => {
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

  //공개 비공개
  const [visibility, setVisibility] = useState("public");

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };

  // const handleSubmit = () => {
  //   // 여기에 글 작성 내용을 백엔드로 전송하는 로직을 추가합니다.
  //   const data = {
  //     content: document.getElementById("writebook").value,
  //     visibility: visibility,
  //   };

  //   // 예시: fetch를 사용하여 POST 요청
  //   fetch("/api/write", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       // 작성 완료 후 다른 페이지로 이동
  //       navigate("/success");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  //이미지 추가하기
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files
      .slice(0, 2 - images.length)
      .map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <MW.Container>
      <header>
        <MW.Nav>
          <MW.NavContent>
            <MW.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MW.Logo>
            <MW.Menu>
              <MW.MovingContent>
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
              </MW.MovingContent>
              <div id="bar"> | </div>
              <MW.Account>
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
              </MW.Account>
            </MW.Menu>
          </MW.NavContent>
        </MW.Nav>
      </header>
      {/*  */}
      <main>
        <MW.WriteContainer>
          <MW.WriteWrap>
            <MW.Write>
              <textarea
                id="writebook"
                placeholder="| 본문을 입력해 주세요"
              ></textarea>
              <div id="line"></div>
              <MW.AddImgWrap>
                <MW.AddImg>
                  <input
                    type="file"
                    id="addimg"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="addimg" id="addBtn">
                    <img
                      id="addimg"
                      src={`${process.env.PUBLIC_URL}/images/addImg.png`}
                      alt="addimg"
                    />
                    <span id="addImgText">첨부하기</span>
                  </label>
                </MW.AddImg>
                <MW.AddedImg>
                  {images.map((image, index) => (
                    <div key={index} onClick={() => removeImage(index)}>
                      <img id="addedImgs" src={image} alt={`added-${index}`} />
                    </div>
                  ))}
                </MW.AddedImg>
              </MW.AddImgWrap>
            </MW.Write>
            <MW.PublicPrivate>
              <label id="label">
                <input
                  id="public"
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={visibility === "public"}
                  onChange={handleVisibilityChange}
                />{" "}
                <span>공개</span>
              </label>
              <label id="label">
                <input
                  id="private"
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={visibility === "private"}
                  onChange={handleVisibilityChange}
                />{" "}
                <span>비공개</span>
              </label>
            </MW.PublicPrivate>
          </MW.WriteWrap>
          <MW.WriteButton>
            <div id="writeWarning">등록한 후엔 수정 및 삭제할 수 없어요</div>
            <button id="writeBtn" onClick={goMyBookDetail}>
              발행하기
            </button>
          </MW.WriteButton>
        </MW.WriteContainer>
      </main>
      {/*  */}
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <footer>
        <MW.Footer>
          <MW.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </MW.Introduction>
        </MW.Footer>
      </footer>
    </MW.Container>
  );
};

export default MyBookWrite;
