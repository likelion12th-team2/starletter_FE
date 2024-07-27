import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    const token = localStorage.getItem("token");
    console.log("Stored Token:", token);
    if (token) {
      console.log("로그인 되어있음");
      setIsLoggedIn(true);
    }
  }, []);

  const key = localStorage.getItem("token");

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
        const response = await axios.get(
          "http://127.0.0.1:8000/mybooks/list/",
          {
            headers: {
              Authorization: `Token ${key}`,
            },
          }
        );
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

  const [mindBooks, setMindBooks] = useState([]);
  const [myNotes, setMyNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!key) {
        setErrorMessage("토큰이 필요합니다.");
        return;
      }

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/accounts/activity/",
          {
            headers: {
              Authorization: `Token ${key}`,
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
  }, []);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/accounts/activity/`,
        {
          headers: {
            Authorization: `Token ${key}`,
          },
        }
      );
      console.log(response.data);
      // 댓글 삭제 후 추가적인 동작이 필요하다면 여기에 작성하세요.
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
            <A.Symlist>
              {mindBooks.map((book) => (
                <A.Book key={book.id}>
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
              ))}
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
            <A.Comlist>
              {myNotes.map((note) => (
                <A.Post key={note.id}>
                  <div id="detail">{note.body}</div>
                  <A.Del>
                    <button id="btn">삭제</button>
                  </A.Del>
                </A.Post>
              ))}
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
            <div id="sns">인스타 아이디</div>
          </A.Introduction>
        </A.Footer>
      </footer>
    </A.Container>
  );
};

export default Activity;
