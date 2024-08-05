import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as L from "../styles/styledLibrary";
import axios from "axios";
import styled from "styled-components";

// 기존 스타일드 컴포넌트를 확장하여 조건부 스타일링을 적용하는 방법
const Search = styled(({ isAbsolute, ...props }) => <L.Search {...props} />)`
  position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
`;

// 환경 변수나 다른 방법으로 백엔드 URL을 설정하는 부분입니다.
const BACKEND_URL = "http://127.0.0.1:8000" || "http://3.34.187.40";

const Library = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // State for SearchPlus modal 추가
  const [isSearchAbsolute, setIsSearchAbsolute] = useState(false); // State for L.Search position 추가
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장할 상태 변수
  const [isSearchExecuted, setIsSearchExecuted] = useState(false); // 검색 실행 여부 상태 변수
  const [booksMostMinds, setBooksMostMinds] = useState([]); // 공감 많이 받은 책 상태 변수
  const [booksRecent, setBooksRecent] = useState([]); // 최근 책 상태 변수
  const myPageRef = useRef(null);
  const searchRef = useRef(null); // Ref for search input
  const searchWrapRef = useRef(null); // Ref for search wrap 추가
  const [token, setToken] = useState("");
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어
  const [selectedKeyword, setSelectedKeyword] = useState(""); // 키워드 선택

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("로그인 되어있음");
      setIsLoggedIn(true);
      setToken(token);
    }
    // 최근 검색어 기능
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);

    // 클릭 이벤트 리스너 추가
    const handleClickOutside = (event) => {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(event.target)
      ) {
        setIsSearchModalOpen(false);
        setIsSearchAbsolute(false); // 모달이 닫힐 때 position을 static으로 변경
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const key = localStorage.getItem("token");

  useEffect(() => {
    LibraryBooks();
  }, []);

  const LibraryBooks = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/bookshelf/`);
      // console.log("API 응답:", response.data); // 응답 데이터 로그 출력
      setBooksMostMinds(response.data.booksMostMinds);
      setBooksRecent(response.data.booksRecent);
    } catch (error) {
      console.error("책방 책 불러오기 실패:", error);
      console.log(error.response); // 에러 응답 로그 추가
    }
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

  const goMyBookDetail = (bookId) => {
    navigate(`/library/${bookId}`, { state: { bookId } });
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

  // 내서재 수정
  const goMyBook = async () => {
    if (isLoggedIn) {
      try {
        // 동물 있는지 없는지 판별
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

  const goLib = () => {
    navigate("/library");
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/accounts/logout/`,
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

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  // 최근 검색어
  const saveRecentSearch = (keyword) => {
    const updatedSearches = [
      keyword,
      ...recentSearches.filter((search) => search !== keyword),
    ].slice(0, 7); // 최근 7개까지만 저장
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSearch = async () => {
    const searchValue = searchRef.current.value;
    if (searchValue) {
      saveRecentSearch(searchValue);
      try {
        const response = await axios.get(
          `${BACKEND_URL}/bookshelf/?search=${searchValue}`
        );
        // console.log("검색 결과:", response.data); // 검색 결과 로그 출력
        setSearchResults(response.data.searchedBooks); // 검색 결과를 상태에 저장
        setIsSearchExecuted(true); // 검색 실행 여부 상태 업데이트
        setIsSearchModalOpen(false); // 검색 후 모달 닫기
        setIsSearchAbsolute(false); // 모달 닫힐 때 position을 static으로 변경
      } catch (error) {
        console.error("검색 실패:", error);
        console.log(error.response); // 에러 응답 로그 추가
      }
    }
  };

  useEffect(() => {
    // console.log("검색 결과 state 변경:", searchResults);
  }, [searchResults]);

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
    if (searchRef.current) {
      searchRef.current.value = keyword;
      handleSearch();
    }
  };

  return (
    <L.Container>
      <header>
        <L.Nav>
          <L.NavContent>
            <L.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
                alt="logo"
              />
            </L.Logo>
            <L.Menu>
              <L.MovingContent>
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
              </L.MovingContent>
              <div id="bar"> | </div>
              <L.Account>
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
              </L.Account>
            </L.Menu>
          </L.NavContent>
        </L.Nav>
      </header>
      <L.Main>
        <L.LibContainer>
          <L.SearchWrap ref={searchWrapRef}>
            {" "}
            {/* searchWrapRef 추가 */}
            <Search isAbsolute={isSearchAbsolute}>
              <img
                id="searchImg"
                src={`${process.env.PUBLIC_URL}/static/images/libSearch.png`}
                alt="search"
              />
              <input
                id="search"
                type="text"
                placeholder="키워드나 이름을 검색해 보세요"
                ref={searchRef}
                onFocus={() => {
                  setIsSearchModalOpen(true);
                  setIsSearchAbsolute(true); // 모달이 열릴 때 position을 absolute로 변경
                }} // onFocus 이벤트 핸들러 추가
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </Search>
            {isSearchModalOpen && ( // isSearchModalOpen 상태를 기반으로 모달 표시
              <L.SearchPlus>
                <L.RecentTitle>최근 검색기록</L.RecentTitle>
                <L.RecentList>
                  {recentSearches.map((search, index) => (
                    <div key={index} className="recent-search">
                      {search}
                    </div>
                  ))}
                </L.RecentList>
                <L.RecommendTitle>추천 키워드</L.RecommendTitle>
                <L.RecommendList>
                  {["위로", "공감", "일상", "편지"].map((keyword) => (
                    <button
                      key={keyword}
                      className={`keyword ${
                        selectedKeyword === keyword ? "selected" : ""
                      }`}
                      id={keyword}
                      onClick={() => handleKeywordClick(keyword)}
                    >
                      #{keyword}
                    </button>
                  ))}
                </L.RecommendList>
              </L.SearchPlus>
            )}
          </L.SearchWrap>

          {/* 검색어 입력 전 메인 */}
          {!isSearchExecuted && (
            <L.LibMain>
              <L.Heart>
                <L.Title>공감 많이 받은 책</L.Title>
                <L.HeartWrap>
                  {/* 책 */}
                  {booksMostMinds.slice(0, 5).map((bookMostMinds) => (
                    <L.Book
                      key={bookMostMinds.id}
                      onClick={() => {
                        goMyBookDetail(bookMostMinds.id);
                      }}
                    >
                      <L.BookCover>
                        <L.BookCoverImg>
                          <img
                            id="MycoverImg"
                            src={
                              bookMostMinds.cover ||
                              `${process.env.PUBLIC_URL}/static/images/bookCover.png`
                            }
                            alt="Mycover1"
                          />
                        </L.BookCoverImg>
                        <L.BookCoverText>
                          <div id="title">{bookMostMinds.title}</div>
                        </L.BookCoverText>
                      </L.BookCover>
                      <L.BookTitle>{bookMostMinds.title}</L.BookTitle>
                      <L.BookWriter>{bookMostMinds.author}</L.BookWriter>
                    </L.Book>
                  ))}
                </L.HeartWrap>
              </L.Heart>
              <L.Recent>
                <L.Title>이주의 책</L.Title>
                <L.RecentWrap>
                  {/* 책 */}
                  {booksRecent.slice(0, 5).map((bookRecent) => (
                    <L.Book
                      key={bookRecent.id}
                      onClick={() => {
                        goMyBookDetail(bookRecent.id);
                      }}
                    >
                      <L.BookCover>
                        <L.BookCoverImg>
                          <img
                            id="MycoverImg"
                            src={
                              bookRecent.cover ||
                              `${process.env.PUBLIC_URL}/static/images/bookCover.png`
                            }
                            alt="Mycover1"
                          />
                        </L.BookCoverImg>
                        <L.BookCoverText>
                          <div id="title">{bookRecent.title}</div>
                        </L.BookCoverText>
                      </L.BookCover>
                      <L.BookTitle>{bookRecent.title}</L.BookTitle>
                      <L.BookWriter>{bookRecent.author}</L.BookWriter>
                    </L.Book>
                  ))}
                </L.RecentWrap>
              </L.Recent>
            </L.LibMain>
          )}
          {/* 검색어 입력 후 메인 */}
          {isSearchExecuted && (
            <L.SM>
              {searchResults.length > 0 ? (
                <L.SMBooks>
                  {searchResults.map((book) => (
                    <L.Book
                      key={book.id}
                      onClick={() => {
                        goMyBookDetail(book.id);
                      }}
                    >
                      <L.BookCover>
                        <L.BookCoverImg>
                          <img
                            id="MycoverImg"
                            src={
                              book.cover ||
                              `${process.env.PUBLIC_URL}/static/images/bookCover.png`
                            }
                            alt="Mycover"
                          />
                        </L.BookCoverImg>
                        <L.BookCoverText>
                          <div id="title">{book.title}</div>
                        </L.BookCoverText>
                      </L.BookCover>
                      <L.BookTitle>{book.title}</L.BookTitle>
                      <L.BookWriter>{book.author}</L.BookWriter>
                    </L.Book>
                  ))}
                </L.SMBooks>
              ) : (
                <L.NoResults>
                  <div>검색 결과가 없습니다</div>
                </L.NoResults>
              )}
            </L.SM>
          )}
        </L.LibContainer>
      </L.Main>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <footer>
        <L.Footer>
          <L.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <L.Git>
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
            </L.Git>
          </L.Introduction>
        </L.Footer>
      </footer>
    </L.Container>
  );
};

export default Library;
