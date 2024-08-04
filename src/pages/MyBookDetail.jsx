import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as MB from "../styles/styledMyBookDetail";
import Modal from "react-modal";
import axios from "axios";
import MyPageModal from "./MyPageModal";

const MyBookDetail = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");
  const [book, setBook] = useState({});
  const [pages, setPages] = useState([]);
  const [notes, setNotes] = useState([]);
  const location = useLocation();
  const { bookId } = location.state || {};

  const fetchBookDetail = useCallback(
    async (token) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/mybooks/${bookId}/` ||
            `http://127.0.0.1:8000/mybooks/${bookId}/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        console.log("API 응답:", response.data); // 응답 데이터 로그 출력
        setBook(response.data.book);
        setPages(response.data.pages);
        setNotes(response.data.notes);
      } catch (error) {
        console.error("책 상세내용 확인 실패", error);
        console.log(error.response); // 에러 응답 로그 추가
      }
    },
    [bookId]
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
      setToken(storedToken);
      fetchBookDetail(storedToken);
    }
  }, [fetchBookDetail]);

  const goHome = () => {
    navigate(`/`);
  };

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
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
    if (isLoggedIn) {
      navigate("/library");
    } else {
      navigate("/login");
    }
  };

  const goMyBookWrite = () => {
    navigate(`/mybook/write`, { state: { bookId } });
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/accounts/logout/` ||
          `http://127.0.0.1:8000/accounts/logout/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
    name: "닉네임",
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPostitContent, setSelectedPostitContent] = useState("");
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);

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

  if (!bookId) {
    return <div>책 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <MB.Container>
      <header>
        <MB.Nav>
          <MB.NavContent>
            <MB.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MB.Logo>
            <MB.Menu>
              <MB.MovingContent>
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
              </MB.MovingContent>
              <div id="bar"> | </div>
              <MB.Account>
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
              </MB.Account>
            </MB.Menu>
          </MB.NavContent>
        </MB.Nav>
      </header>
      <MB.Body>
        <MB.BodyContainer>
          <MB.NewBook>
            <MB.BookCover>
              <MB.BookCoverImg>
                <img
                  id="MycoverImg"
                  src={
                    book.cover ||
                    `${process.env.PUBLIC_URL}/images/default_cover.png`
                  }
                  alt="Mycover1"
                />
              </MB.BookCoverImg>
              <MB.BookCoverText>
                <div id="title">{book.title}</div>
              </MB.BookCoverText>
            </MB.BookCover>
            <MB.BookDetail>
              <div id="title">{book.title}</div>
              <div id="writer">{book.author}</div>
              <div id="writtendate">마지막 수정일: {book.lastUpdated}</div>
              <div id="ps">{book.description}</div>
            </MB.BookDetail>
          </MB.NewBook>
          <MB.MyBook>
            <MB.BookContainer>
              {pages.length > 0 && (
                <>
                  <MB.Page
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                  >
                    <MB.PageContent>
                      {currentPage > 0 && (
                        <>
                          <div id="wrap">
                            <div id="date">
                              {pages[currentPage - 1].createdAt}
                            </div>
                            {!pages[currentPage - 1].isPublic && (
                              <img
                                id="public"
                                src={`${process.env.PUBLIC_URL}/images/public.png`}
                                alt="비공개 페이지"
                              />
                            )}
                          </div>

                          <div id="images">
                            {pages[currentPage - 1].images.map(
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
                          <div id="content">{pages[currentPage - 1].body}</div>
                        </>
                      )}
                    </MB.PageContent>
                  </MB.Page>
                  <MB.Page
                    onClick={handleNextPage}
                    disabled={currentPage >= pages.length - 1}
                  >
                    <MB.PageContent>
                      <div id="wrap">
                        <div id="date">{pages[currentPage].createdAt}</div>
                        {!pages[currentPage].isPublic && (
                          <img
                            id="public"
                            src={`${process.env.PUBLIC_URL}/images/public.png`}
                            alt="비공개 페이지"
                          />
                        )}
                      </div>

                      <div id="images">
                        {pages[currentPage].images.map((image, index) => (
                          <img
                            key={index}
                            id="img"
                            src={image.images}
                            alt={`페이지 내용 ${index}`}
                          />
                        ))}
                      </div>
                      <div id="content">{pages[currentPage].body}</div>
                    </MB.PageContent>
                  </MB.Page>
                </>
              )}
            </MB.BookContainer>
          </MB.MyBook>
          <MB.WriteNewPage>
            <button id="writeNewPage" onClick={() => goMyBookWrite(book.id)}>
              새 페이지 쓰기
            </button>
          </MB.WriteNewPage>
          <MB.Section>
            <div id="section"></div>
          </MB.Section>
          <MB.PostitWrap>
            <MB.PostitList>
              {notes.map((note) => (
                <MB.Postit
                  key={note.id}
                  onClick={() => openPostitModal(note.body)}
                >
                  <div id="content">{note.body}</div>
                </MB.Postit>
              ))}
            </MB.PostitList>
          </MB.PostitWrap>
        </MB.BodyContainer>
      </MB.Body>
      <MyPageModal
        isOpen={isMyPageModalOpen}
        onClose={closeMyPageModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <footer>
        <MB.Footer>
          <MB.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <MB.Git>
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
            </MB.Git>
          </MB.Introduction>
        </MB.Footer>
      </footer>
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
            textAlign: "left",
          },
        }}
      >
        <MB.ModalContent>{selectedPostitContent}</MB.ModalContent>
      </Modal>
    </MB.Container>
  );
};

export default MyBookDetail;
