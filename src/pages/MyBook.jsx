import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as M from "../styles/styledMyBook";
import axios from "axios";

const MyBook = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/mybooks/list/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setBooks(response.data.books);
      } catch (error) {
        console.error("책 목록을 불러오는 데 실패했습니다:", error);
      }
    };

    if (token) {
      fetchBooks();
    }
  }, [token]);

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

  const goMyBookDetail = (bookId) => {
    navigate(`/mybook/detail/${bookId}`, { state: { bookId } });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        const storedToken = token || localStorage.getItem("token");
        if (!storedToken) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/mybooks/list/`,
          {
            headers: {
              Authorization: `Token ${storedToken}`,
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
    if (isLoggedIn) {
      navigate(`/library`);
    } else {
      navigate(`/login`);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/accounts/logout/`,
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

  return (
    <M.Container>
      <header>
        <M.Nav>
          <M.NavContent>
            <M.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </M.Logo>
            <M.Menu>
              <M.MovingContent>
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
              </M.MovingContent>
              <div id="bar"> | </div>
              <M.Account>
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
              </M.Account>
            </M.Menu>
          </M.NavContent>
        </M.Nav>
      </header>
      <M.Body>
        <M.bodyContainer>
          {books.map((book) => (
            <M.Book key={book.id} onClick={() => goMyBookDetail(book.id)}>
              <M.BookCoverImg>
                <img
                  id="MycoverImg"
                  src={
                    book.cover ||
                    `${process.env.PUBLIC_URL}/images/default_cover.png`
                  }
                  alt="cover"
                />
              </M.BookCoverImg>
              <M.BookCoverText>
                <div id="title">{book.title}</div>
              </M.BookCoverText>
            </M.Book>
          ))}
        </M.bodyContainer>
      </M.Body>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        anchorRef={myPageRef}
      />
      <footer>
        <M.Footer>
          <M.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <M.Git>
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
            </M.Git>
          </M.Introduction>
        </M.Footer>
      </footer>
    </M.Container>
  );
};

export default MyBook;
