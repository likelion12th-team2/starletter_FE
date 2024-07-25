import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import Modal from "react-modal"; // 모달
import * as LD from "../styles/styledLD";
import axios from "axios";

const LibraryDetail = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");
  const [isHeartClicked, setIsHeartClicked] = useState(false); // 공감하기

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
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

  const goHome = () => {
    navigate(`/`);
  };

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
  };

  const goMyBook = () => {
    if (isLoggedIn) {
      navigate("/mybook");
    } else {
      navigate("/login");
    }
  };

  const goLib = async () => {
    if (isLoggedIn) {
      try {
        // 동물 있는지 없는지 판별
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/pets/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        if (response.data.length > 0) {
          navigate(`/mybook/make`); // 동물 있으면 책 만들기
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

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  // 책 구현
  const contents = [
    {
      id: 1,
      date: "2024.07.02",
      content:
        "제작년 봄이었나? 날이 풀려서 쪼꼬랑 노들섬 피크닉 갔던 날 엄마가 사준 손수건 두르고 여기저기 뛰어다녔다 바구니에 자꾸 들어가려고 해서 처음에는 안 된다고 했는데 귀여워서 냅뒀다.. 쪼꼬는 귀여워서 모든게 용서되는듯 그니까 언니 놔두고 간 것두 용서할게 쪼꼬 영.사.해. 영원히 사랑한다는 뜻",
      img1: "/images/mybookimg1.png",
      img2: "/images/mybookimg2.png",
      public: "public",
    },
    {
      id: 2,
      date: "2024.07.07",
      content:
        "쪼꼬랑 유채꽃 보러 갔을 때 쪼꼬가 엄청 행복하게 웃었는데 카메라 고장나서 사진 없음 이슈... 쪼꼬야 보고싶어",
      img1: "",
      img2: "",
      public: "",
    },
    {
      id: 3,
      date: "2024.07.01",
      content: "음하하3",
      img1: "",
      img2: "",
      public: "",
    },
    {
      id: 4,
      date: "2024.07.07",
      content: "음하하4",
      img1: "",
      img2: "",
      public: "",
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < contents.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 책 공감하기
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  // 모달창 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPostitContent, setSelectedPostitContent] = useState(""); // 포스트잇 선택시 해당 내용 보임
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);
  const [isAddPostitModalOpen, setIsAddPostitModalOpen] = useState(false); // 추가된 상태 변수
  const [newPostitContent, setNewPostitContent] = useState("");

  const openPostitModal = (content) => {
    setSelectedPostitContent(content);
    setModalIsOpen(true);
  };

  const closePostitModal = () => {
    setSelectedPostitContent("");
    setModalIsOpen(false);
  };

  const openMyPageModal = () => {
    setIsMyPageModalOpen(true);
  };

  const closeMyPageModal = () => {
    setIsMyPageModalOpen(false);
  };

  const openAddPostitModal = () => {
    setIsAddPostitModalOpen(true);
  };

  const closeAddPostitModal = () => {
    setIsAddPostitModalOpen(false);
  };

  const handleAddPostit = () => {
    const newPostit = {
      id: postits.length + 1,
      content: newPostitContent,
    };
    setPostits([...postits, newPostit]);
    setNewPostitContent("");
    closeAddPostitModal();
  };

  // 포스트잇 (댓글)
  const [postits, setPostits] = useState([
    {
      id: 1,
      content: "쪼꼬야 이모도 쪼고 보고싶어",
    },
    {
      id: 2,
      content: "쪼꼬도 우리 보고있을거라고 생각해",
    },
    {
      id: 3,
      content: "언니는 쪼꼬 절대 못잊을거야! 쪼꼬도 우리 잊지마",
    },
  ]);

  return (
    <LD.Container>
      <header>
        <LD.Nav>
          <LD.NavContent>
            <LD.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </LD.Logo>
            <LD.Menu>
              <LD.MovingContent>
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
              </LD.MovingContent>
              <div id="bar"> | </div>
              <LD.Account>
                {isLoggedIn ? (
                  <>
                    <div id="mypage" onClick={openMyPageModal} ref={myPageRef}>
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
              </LD.Account>
            </LD.Menu>
          </LD.NavContent>
        </LD.Nav>
      </header>
      {/* 마이페이지 모달창 추가 */}
      <MyPageModal
        isOpen={isMyPageModalOpen}
        onClose={closeMyPageModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      {/* 포스트잇 모달창 추가 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closePostitModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "471px",
            height: "444px",
            background: "#C4DEF8",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            borderRadius: "10px",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <LD.ModalContent>{selectedPostitContent}</LD.ModalContent>
      </Modal>
      {/* 추가 포스트잇 모달창 추가 */}
      <Modal
        isOpen={isAddPostitModalOpen}
        onRequestClose={closeAddPostitModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "471px",
            height: "444px",
            background: "#C4DEF8",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            borderRadius: "10px",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <LD.ModalContent>
          <textarea
            id="addPostit"
            value={newPostitContent}
            onChange={(e) => setNewPostitContent(e.target.value)}
            placeholder="포스트잇 내용을 작성하시오"
          />
          <button
            id="addPostitBtn"
            onClick={handleAddPostit}
            disabled={!newPostitContent.trim()}
          >
            등록하기
          </button>
        </LD.ModalContent>
      </Modal>
      {/*  */}
      <LD.Body>
        <LD.Book>
          <LD.PageTitle>아기돼지삼형제님의 서재</LD.PageTitle>
          <LD.BookContainer>
            <LD.Page onClick={handlePrevPage} disabled={currentPage === 0}>
              <LD.PageContent>
                {currentPage > 0 && (
                  <>
                    <div id="date">
                      {contents[currentPage - 1].date}
                      {contents[currentPage - 1].public && (
                        <img
                          id="public"
                          src={`${process.env.PUBLIC_URL}/images/public.png`}
                          alt="공개 페이지"
                        />
                      )}
                    </div>

                    <div id="images">
                      {contents[currentPage - 1].img1 && (
                        <img
                          id="img"
                          src={`${process.env.PUBLIC_URL}${
                            contents[currentPage - 1].img1
                          }`}
                          alt="페이지 내용"
                        />
                      )}
                      {contents[currentPage - 1].img2 && (
                        <img
                          id="img"
                          src={`${process.env.PUBLIC_URL}${
                            contents[currentPage - 1].img2
                          }`}
                          alt="페이지 내용"
                        />
                      )}
                    </div>
                    <div id="content">{contents[currentPage - 1].content}</div>
                  </>
                )}
              </LD.PageContent>
            </LD.Page>
            <LD.Page
              onClick={handleNextPage}
              disabled={currentPage >= contents.length - 1}
            >
              <LD.PageContent>
                <div id="date">
                  {contents[currentPage].date}
                  {contents[currentPage].public && (
                    <img
                      id="public"
                      src={`${process.env.PUBLIC_URL}/images/public.png`}
                      alt="공개 페이지"
                    />
                  )}
                </div>
                <div id="images">
                  {contents[currentPage].img1 && (
                    <img
                      id="img"
                      src={`${process.env.PUBLIC_URL}${contents[currentPage].img1}`}
                      alt="페이지 내용"
                    />
                  )}
                  {contents[currentPage].img2 && (
                    <img
                      id="img"
                      src={`${process.env.PUBLIC_URL}${contents[currentPage].img2}`}
                      alt="페이지 내용"
                    />
                  )}
                </div>
                <div id="content">{contents[currentPage].content}</div>
              </LD.PageContent>
            </LD.Page>
          </LD.BookContainer>
        </LD.Book>
        <LD.HeartBtn onClick={handleHeartClick}>
          <img
            id="heart"
            src={`${process.env.PUBLIC_URL}/images/${
              isHeartClicked ? "heartBtnClicked.png" : "heartBtn.png"
            }`}
            alt="heartBtn"
          />
          <span id="heartText">공감해요</span>
        </LD.HeartBtn>
        <LD.Section>
          <div id="section"></div>
        </LD.Section>
        <LD.PostitWrap>
          <LD.PostitList>
            {postits.map((postit) => (
              <LD.Postit
                key={postit.id}
                onClick={() => openPostitModal(postit.content)}
              >
                <div id="content">{postit.content}</div>
              </LD.Postit>
            ))}
            <LD.Postit onClick={openAddPostitModal}>
              <img
                id="postitPlus"
                src={`${process.env.PUBLIC_URL}/images/postitPlus.png`}
                alt="plus"
              />
            </LD.Postit>
          </LD.PostitList>
        </LD.PostitWrap>
      </LD.Body>
      <footer>
        <LD.Footer>
          <LD.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </LD.Introduction>
        </LD.Footer>
      </footer>
    </LD.Container>
  );
};

export default LibraryDetail;
