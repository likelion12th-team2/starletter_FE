import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as A from "../styles/StyledMB";
import axios from "axios";

const Activity = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Stored Token:", storedToken);
    if (storedToken) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
      setToken(storedToken);
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

  const goFun = () => {
    navigate(`/funeral`);
  };

  //내서재 수정
  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        const storedToken = token || localStorage.getItem("token");
        if (!storedToken) {
          navigate("/login");
          return;
        }
        const response = await axios.get(`http://13.209.13.101/mybooks/list/`, {
          headers: {
            Authorization: `Token ${storedToken}`,
          },
        });
        console.log("API 응답:", response.data);
        if (
          response.data.books.length > 0 ||
          response.data.petsNoBook.length > 0
        ) {
          navigate(`/mybook/make`);
        } else {
          navigate(`/mybook/addpet`);
        }
      } catch (error) {
        console.error("동물 기록 확인 실패:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const goMyBookDetail = (bookId) => {
    navigate(`/library/${bookId}`, { state: { bookId } });
  };

  const goLib = () => {
    navigate(`/library`);
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

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `http://13.209.13.101/accounts/logout/`,
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
      setIsLoggedIn(false);
      setToken("");
      navigate(`/`);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const [mindBooks, setMindBooks] = useState([]);
  const [myNotes, setMyNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        console.error("토큰이 필요합니다.");
        return;
      }

      try {
        const response = await axios.get(
          `http://13.209.13.101/accounts/activity/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log("Fetched data:", response.data);
        setMindBooks(response.data.mindBooks);
        setMyNotes(response.data.myNotes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const openConfirmModal = (id) => {
    setSelectedNoteId(id);
    setIsConfirmOpen(true);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://13.209.13.101/accounts/activity/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
          data: {
            note_id: selectedNoteId,
          },
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    } finally {
      setIsConfirmOpen(false);
    }
  };

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
        anchorRef={myPageRef}
      />
      <A.Body>
        <A.Title>내 활동</A.Title>
        <A.Act>
          <A.Sympathy>
            <A.Heart>
              <img
                id="img"
                src={`${process.env.PUBLIC_URL}/images/Heart.svg`}
                alt="이미지"
              />
              <div id="heart">공감</div>
            </A.Heart>
            <A.Symlist center={mindBooks.length === 0}>
              {mindBooks.length > 0 ? (
                mindBooks.map((book) => (
                  <A.BookCover key={book.id}>
                    <A.Book
                      onClick={() => {
                        goMyBookDetail(book.id);
                      }}
                    >
                      <img
                        id="bookcover"
                        src={
                          book.cover ||
                          `${process.env.PUBLIC_URL}/images/Bookcover.svg`
                        }
                        alt="표지"
                      />
                      <div id="title">{book.title}</div>
                    </A.Book>
                    <A.BookDetail>
                      <div id="title">{book.title}</div>
                      <div id="author">{book.author}</div>
                    </A.BookDetail>
                  </A.BookCover>
                ))
              ) : (
                <A.Symnull>
                  <div id="sym1">공감한 책이 없습니다.</div>
                  <div id="sym2">
                    책방에서 공감해요를 누른 책들이 여기에 표시됩니다.
                  </div>
                </A.Symnull>
              )}
            </A.Symlist>
          </A.Sympathy>
          <A.Comment>
            <A.Detail>
              <img
                id="img"
                src={`${process.env.PUBLIC_URL}/images/Comment.svg`}
                alt="이미지"
              />
              <div id="comment">댓글</div>
            </A.Detail>
            <A.Comlist center={myNotes.length === 0}>
              {myNotes.length > 0 ? (
                myNotes.map((note) => (
                  <A.Post key={note.id}>
                    <div id="detail">{note.body}</div>
                    <A.Del>
                      <button
                        id="btn"
                        onClick={() => openConfirmModal(note.id)}
                      >
                        삭제
                      </button>
                    </A.Del>
                  </A.Post>
                ))
              ) : (
                <A.Comnull>
                  <div id="com1">댓글을 남기지 않았습니다.</div>
                  <div id="com2">책방에서 댓글을 남기면 여기에 표시됩니다.</div>
                </A.Comnull>
              )}
            </A.Comlist>
          </A.Comment>
        </A.Act>
      </A.Body>

      {isConfirmOpen && (
        <A.ConfirmModal>
          <A.ModalContent>
            <A.Detail1>
              <div id="really">정말 </div>
              <div id="delete">삭제</div>
              <div id="do">하시겠습니까?</div>
            </A.Detail1>
            <A.ModalButton>
              <button id="yes" onClick={handleDelete}>
                예
              </button>
              <button id="no" onClick={() => setIsConfirmOpen(false)}>
                아니오
              </button>
            </A.ModalButton>
          </A.ModalContent>
        </A.ConfirmModal>
      )}
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

export default Activity;
