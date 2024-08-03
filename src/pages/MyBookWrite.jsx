import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as MW from "../styles/styledMyBookWrite";
import axios from "axios";
import MyPageModal from "./MyPageModal";

const MyBookWrite = ({ nickname }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookId } = location.state || {};

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  const [visibility, setVisibility] = useState("public");
  const [images, setImages] = useState([]);
  const [body, setBody] = useState("");

  const fileInputRef = useRef(null); // 파일 입력 요소에 접근하기 위한 useRef

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const goHome = () => navigate("/");
  const goLogin = () => navigate("/login");
  const goJoin = () => navigate("/join");
  const goFun = () => navigate("/funeral");
  const goMarket = () => navigate("/market");
  const goLib = () => navigate(`/library`);
  // 내서재 수정
  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        // 동물 있는지 없는지 판별
        const response = await axios.get(`/mybooks/list/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
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

  const goMyBookDetail = () => {
    navigate(`/mybook/detail/${bookId}`, { state: { bookId } });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        `/accounts/logout/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("key");
      setIsLoggedIn(false);
      setToken("");
      navigate("/");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const handleVisibilityChange = (event) => setVisibility(event.target.value);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.slice(0, 2 - images.length);
    setImages((prevImages) => [...prevImages, ...newImages]);
    fileInputRef.current.value = null; // 파일 입력 요소 초기화
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleWrite = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("body", body);
    formData.append("createdAt", new Date().toISOString());
    formData.append("isPublic", visibility === "public");

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      await axios.post(`/mybooks/${bookId}/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      goMyBookDetail();
    } catch (error) {
      console.error("페이지 작성 실패:", error);
    }
  };

  const profile = { name: nickname };

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
      <main>
        <MW.WriteContainer>
          <MW.WriteWrap>
            <MW.Write>
              <textarea
                id="writebook"
                placeholder="본문을 입력해 주세요"
                value={body}
                onChange={(e) => setBody(e.target.value)}
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
                    ref={fileInputRef}
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
                      <img
                        id="addedImgs"
                        src={URL.createObjectURL(image)}
                        alt={`added-${index}`}
                      />
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
                />
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
                />
                <span>비공개</span>
              </label>
            </MW.PublicPrivate>
          </MW.WriteWrap>
          <MW.WriteButton>
            <div id="writeWarning">등록한 후엔 수정 및 삭제할 수 없어요</div>
            <button id="writeBtn" onClick={handleWrite}>
              발행하기
            </button>
          </MW.WriteButton>
        </MW.WriteContainer>
      </main>
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
            <MW.Git>
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
            </MW.Git>
          </MW.Introduction>
        </MW.Footer>
      </footer>
    </MW.Container>
  );
};

export default MyBookWrite;
