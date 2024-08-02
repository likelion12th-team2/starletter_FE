import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import Modal from "react-modal"; // 모달
import * as LD from "../styles/styledLD";
import axios from "axios";

Modal.setAppElement("#root"); // 모달 설정

const LibraryDetail = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");
  const [isHeartClicked, setIsHeartClicked] = useState(false); // 공감하기
  const [isOwner, setIsOwner] = useState(false); // 책 소유 여부

  const [pages, setPages] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isPublic, setIsPublic] = useState([]);
  const [isMinded, setIsMinded] = useState(false);
  const location = useLocation();
  const { bookId } = location.state || {};

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (bookId && token) {
      checkHeartState();
    }
  }, [bookId, token]);

  const key = localStorage.getItem("token");

  const checkHeartState = async () => {
    try {
      const response = await axios.get(
        `http://13.209.13.101/bookshelf/${bookId}`,
        {
          headers: {
            Authorization: `Token ${key}`, // 헤더에 저장된 토큰 사용
          },
        }
      );
      setIsHeartClicked(response.data.isMinded);
    } catch (error) {
      console.error("Error checking heart state:", error);
    }
  };

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `http://13.209.13.101/accounts/logout/`,
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

  //내서재 수정
  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        // 동물 있는지 없는지 판별
        const response = await axios.get(`http://13.209.13.101/mybooks/list/`, {
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
        console.error("동물 기록 확인 실패:");
      }
    } else {
      navigate("/login");
    }
  };

  const goLib = async () => {
    navigate("/library");
  };

  const profile = {
    name: nickname,
  };

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 모달창 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPostitContent, setSelectedPostitContent] = useState(""); // 포스트잇 선택시 해당 내용 보임
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);
  const [isAddPostitModalOpen, setIsAddPostitModalOpen] = useState(false); // 추가된 상태 변수
  const [newPostitContent, setNewPostitContent] = useState("");
  const [postitTextLength, setPostitTextLength] = useState(0); // 추가된 상태 변수

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

  const handleNewPostitContentChange = (e) => {
    const content = e.target.value;
    setNewPostitContent(content);
    setPostitTextLength(content.length);
  };

  // 책 공감하기
  const handleHeartClick = async () => {
    if (!key) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      console.error("로그인 되어있지 않습니다.");
      return;
    }
    const previousState = isHeartClicked;
    setIsHeartClicked(!isHeartClicked);
    try {
      await handleAddHeart();
    } catch (error) {
      setIsHeartClicked(previousState);
    }
  };

  const handleAddHeart = async () => {
    if (!key) {
      console.error("로그인 되어있지 않습니다.");
      return;
    }
    try {
      const response = await axios.post(
        `http://13.209.13.101/bookshelf/${bookId}/mind/`,
        {},
        {
          headers: { Authorization: `Token ${key}` },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      alert("본인의 책은 공감할 수 없습니다.");
      throw error;
    }
  };

  // 포스트잇 붙이기
  const handleAddPostit = async (event) => {
    event.preventDefault();

    if (!key) {
      console.error("토큰이 없습니다.");
      return;
    }

    try {
      const response = await axios.post(
        `http://13.209.13.101/bookshelf/${bookId}/`,
        {
          body: newPostitContent,
        },
        {
          headers: { Authorization: `Token ${key}` },
        }
      );
      const newNote = response.data;
      setNotes([...notes, newNote]);
      setNewPostitContent("");
      setPostitTextLength(0);
      closeAddPostitModal();
    } catch (error) {
      console.error("포스트잇 추가 실패:", error);
      console.log(error.response);
    }
  };

  // 책 구현
  useEffect(() => {
    if (bookId) {
      ShowBookDetail();
    } else {
      console.error("No bookId provided");
    }
  }, [bookId]);

  const ShowBookDetail = async () => {
    console.log(`Fetching details for bookId: ${bookId}`);
    try {
      const response = await axios.get(
        `http://13.209.13.101/bookshelf/${bookId}/`,
        {
          headers: key ? { Authorization: `Token ${key}` } : {},
        }
      );
      console.log("API 응답:", response.data); // 응답 데이터 로그 출력

      setPages(response.data.pages);
      setNotes(response.data.notes);
      setIsMinded(response.data.isMinded);
      setIsPublic(response.data.isPublic);
    } catch (error) {
      console.error("책 상세정보 불러오기 실패:", error);
      console.log(error.response); // 에러 응답 로그 추가
    }
  };

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
      {token && ( // 토큰이 있는 경우에만 모달을 표시
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
            <form id="wrap" onSubmit={handleAddPostit}>
              <textarea
                id="addPostit"
                value={newPostitContent}
                onChange={handleNewPostitContentChange}
                placeholder="포스트잇 내용을 작성하시오"
              />
              <div id="text_length">
                (<span id="postit_text_length">{postitTextLength}</span>/500)
              </div>
              <button
                id="addPostitBtn"
                type="submit"
                disabled={!newPostitContent.trim()}
              >
                등록하기
              </button>
            </form>
          </LD.ModalContent>
        </Modal>
      )}
      {/*  */}
      <LD.Body>
        <LD.Book>
          <LD.PageTitle>{pages.book}</LD.PageTitle>
          <LD.BookContainer>
            {pages.length > 0 && (
              <>
                <LD.Page onClick={handlePrevPage} disabled={currentPage === 0}>
                  <LD.PageContent>
                    {currentPage > 0 && (
                      <>
                        <div id="date">
                          {pages[currentPage - 1]?.createdAt}
                          {!pages[currentPage - 1]?.isPublic && (
                            <img
                              id="public"
                              src={`${process.env.PUBLIC_URL}/images/public.png`}
                              alt="공개 페이지"
                            />
                          )}
                        </div>

                        <div id="images">
                          {pages[currentPage - 1]?.images.map(
                            (image, index) => (
                              <img
                                key={index}
                                id="img"
                                src={image.images}
                                alt={`페이지 내용 ${index}`}
                              />
                            )
                          )}
                        </div>
                        <div id="content">{pages[currentPage - 1]?.body}</div>
                      </>
                    )}
                  </LD.PageContent>
                </LD.Page>
                <LD.Page
                  onClick={handleNextPage}
                  disabled={currentPage >= pages.length - 1}
                >
                  <LD.PageContent>
                    <div id="date">
                      {pages[currentPage]?.createdAt}
                      {!pages[currentPage]?.isPublic && (
                        <img
                          id="public"
                          src={`${process.env.PUBLIC_URL}/images/public.png`}
                          alt="공개 페이지"
                        />
                      )}
                    </div>
                    <div id="images">
                      {pages[currentPage]?.images.map((image, index) => (
                        <img
                          key={index}
                          id="img"
                          src={image.images}
                          alt={`페이지 내용 ${index}`}
                        />
                      ))}
                    </div>
                    <div id="content">{pages[currentPage]?.body}</div>
                  </LD.PageContent>
                </LD.Page>
              </>
            )}
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
            {notes.map((note) => (
              <LD.Postit
                id="postit"
                key={note.id}
                onClick={() => openPostitModal(note.body)}
              >
                <div id="content">{note.body}</div>
              </LD.Postit>
            ))}
            {token && (
              <LD.Postit id="plusmodal" onClick={openAddPostitModal}>
                <img
                  id="postitPlus"
                  src={`${process.env.PUBLIC_URL}/images/postitPlus.png`}
                  alt="plus"
                />
              </LD.Postit>
            )}
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
            <LD.Git>
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
            </LD.Git>
          </LD.Introduction>
        </LD.Footer>
      </footer>
    </LD.Container>
  );
};

export default LibraryDetail;
