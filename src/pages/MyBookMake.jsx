import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as MM from "../styles/styledMyBookMake";
import Modal from "react-modal";
import axios from "axios";
import MyPageModal from "./MyPageModal";

const MyBookMake = ({ nickname }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMyPageModalOpen, setIsMyPageModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState(location.state?.token || "");
  const [books, setBooks] = useState([]);
  const [petsNoBook, setPetsNoBook] = useState([]);
  const [current, setCurrent] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [selectedPetId, setSelectedPetId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
      fetchPets(storedToken);
    } else if (token) {
      setIsLoggedIn(true);
      localStorage.setItem("token", token);
      fetchPets(token);
    }
  }, [token]);

  const fetchPets = async (token) => {
    try {
      const response = await axios.get(`/mybooks/list/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setBooks(response.data.books);
      setPetsNoBook(response.data.petsNoBook);
    } catch (error) {
      console.error("동물 기록 확인 실패:", error);
    }
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const goHome = () => navigateTo(`/`);
  const goLogin = () => navigateTo(`/login`);
  const goJoin = () => navigateTo(`/join`);
  const goFun = () => navigateTo(`/funeral`);
  const goMarket = () => navigateTo(`/market`);
  const goMyBookDetail = (bookId) =>
    navigate(`/mybook/detail/${bookId}`, { state: { bookId } });
  const goLib = () => navigateTo(`/library`);
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
  const handleLogout = async () => {
    try {
      await axios.post(
        `/accounts/logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setToken("");
      navigate(`/`);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const nextBook = () => {
    setCurrent((prev) => (prev + 1) % (books.length + petsNoBook.length));
  };

  const prevBook = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + books.length + petsNoBook.length) %
        (books.length + petsNoBook.length)
    );
  };

  const showButtons = books.length + petsNoBook.length > 1;

  const openMyPageModal = () => {
    setIsMyPageModalOpen(true);
  };

  const closeMyPageModal = () => {
    setIsMyPageModalOpen(false);
  };

  const openBookModal = (petId) => {
    setSelectedPetId(petId);
    setIsBookModalOpen(true);
  };

  const closeBookModal = () => {
    setIsBookModalOpen(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(file);
    }
  };

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  };

  const profile = {
    name: nickname,
  };

  const handleMakeBook = async () => {
    const token = localStorage.getItem("token");
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("pet", selectedPetId);
      formData.append("description", description || "");
      formData.append("cover", coverImage || null);
      formData.append("keywordTag", selectedKeyword);

      await axios.post(`/mybooks/list/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      closeBookModal();
      fetchPets(token);
    } catch (error) {
      console.error("책 생성 실패:", error);
    }
  };

  return (
    <MM.Container>
      <header>
        <MM.Nav>
          <MM.NavContent>
            <MM.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MM.Logo>
            <MM.Menu>
              <MM.MovingContent>
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
              </MM.MovingContent>
              <div id="bar"> | </div>
              <MM.Account>
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
              </MM.Account>
            </MM.Menu>
          </MM.NavContent>
        </MM.Nav>
      </header>

      <MM.Body>
        <MM.BodyContainer>
          <MM.Slider>
            <MM.Button onClick={prevBook} show={showButtons}>
              <img
                src={`${process.env.PUBLIC_URL}/images/beforebook.png`}
                alt="prevpage"
              />
            </MM.Button>
            <MM.BookContainer>
              {books.length + petsNoBook.length === 1 &&
                (books.length === 1 ? (
                  <MM.Book
                    key={books[0].id}
                    large
                    onClick={() => goMyBookDetail(books[0].id)}
                  >
                    <img
                      id="img"
                      src={
                        books[0].cover ||
                        `${process.env.PUBLIC_URL}/images/default_cover.png`
                      }
                      alt="cover"
                    />
                    <div id="title">{books[0].title}</div>
                  </MM.Book>
                ) : (
                  <MM.NoBook key={petsNoBook[0].id} large>
                    <img
                      id="img"
                      src={
                        petsNoBook[0].petImage ||
                        `${process.env.PUBLIC_URL}/images/default_pet.png`
                      }
                      alt="pet"
                    />
                    <div id="title">{petsNoBook[0].petName}</div>
                    <div id="author">{petsNoBook[0].petUser}</div>
                    <MM.AddBtn onClick={() => openBookModal(petsNoBook[0].id)}>
                      <img
                        id="addbtn"
                        src={`${process.env.PUBLIC_URL}/images/BookAddBtn.svg`}
                        alt="add"
                      />
                    </MM.AddBtn>
                  </MM.NoBook>
                ))}

              {books.length + petsNoBook.length > 1 &&
                books.map((book, index) => {
                  const position =
                    (index + petsNoBook.length) %
                    (books.length + petsNoBook.length);
                  const large = position === current;
                  const small =
                    position ===
                      (current + 1) % (books.length + petsNoBook.length) ||
                    position ===
                      (current - 1 + books.length + petsNoBook.length) %
                        (books.length + petsNoBook.length);
                  const next =
                    position ===
                    (current + 1) % (books.length + petsNoBook.length);
                  const prev =
                    position ===
                    (current - 1 + books.length + petsNoBook.length) %
                      (books.length + petsNoBook.length);
                  const hidden = !(large || small);

                  const updatedNext =
                    books.length + petsNoBook.length === 2 && position === 1;

                  return (
                    <MM.Book
                      key={book.id}
                      large={large}
                      small={small}
                      next={next || updatedNext}
                      prev={!updatedNext && prev}
                      hidden={hidden}
                      onClick={() => goMyBookDetail(book.id)}
                    >
                      <img
                        id="img"
                        src={
                          book.cover ||
                          `${process.env.PUBLIC_URL}/images/default_cover.png`
                        }
                        alt="cover"
                      />
                      <div id="title">{book.title}</div>
                    </MM.Book>
                  );
                })}
              {books.length + petsNoBook.length > 1 &&
                petsNoBook.map((pet, index) => {
                  const position = index;
                  const large = position === current;
                  const small =
                    position ===
                      (current + 1) % (books.length + petsNoBook.length) ||
                    position ===
                      (current - 1 + books.length + petsNoBook.length) %
                        (books.length + petsNoBook.length);
                  const next =
                    position ===
                    (current + 1) % (books.length + petsNoBook.length);
                  const prev =
                    position ===
                    (current - 1 + books.length + petsNoBook.length) %
                      (books.length + petsNoBook.length);
                  const hidden = !(large || small);

                  const updatedNext =
                    books.length + petsNoBook.length === 2 && position === 1;

                  return (
                    <MM.NoBook
                      key={pet.id}
                      large={large}
                      small={small}
                      next={next || updatedNext}
                      prev={!updatedNext && prev}
                      hidden={hidden}
                    >
                      <img
                        id="img"
                        src={
                          pet.petImage ||
                          `${process.env.PUBLIC_URL}/images/default_pet.png`
                        }
                        alt="pet"
                      />
                      <div id="title">{pet.petName}</div>
                      <div id="author">{pet.petUser}</div>
                      <MM.AddBtn onClick={() => openBookModal(pet.id)}>
                        <img
                          id="addbtn"
                          src={`${process.env.PUBLIC_URL}/images/BookAddBtn.svg`}
                          alt="add"
                        />
                      </MM.AddBtn>
                    </MM.NoBook>
                  );
                })}
            </MM.BookContainer>
            <MM.Button onClick={nextBook} show={showButtons}>
              <img
                src={`${process.env.PUBLIC_URL}/images/nextbook.png`}
                alt="nextbook"
              />
            </MM.Button>
          </MM.Slider>
        </MM.BodyContainer>
      </MM.Body>
      <footer>
        <MM.Footer>
          <MM.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <MM.Git>
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
            </MM.Git>
          </MM.Introduction>
        </MM.Footer>
        <MyPageModal
          isOpen={isMyPageModalOpen}
          onClose={closeMyPageModal}
          profile={profile}
          anchorRef={myPageRef}
        />
      </footer>
      <Modal
        isOpen={isBookModalOpen}
        onRequestClose={closeBookModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "911px",
            background: "#FFF",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <MM.ModalWrap>
          <MM.BackButton>
            <button id="backbtn" onClick={closeBookModal}>
              <img
                src={`${process.env.PUBLIC_URL}/images/deletModal.png`}
                alt="back"
              />
            </button>
          </MM.BackButton>
          <MM.ModalContent>
            <MM.BookCover>
              <MM.BookCoverImg>
                <img
                  id="adding"
                  src={
                    coverImage
                      ? URL.createObjectURL(coverImage)
                      : `${process.env.PUBLIC_URL}/images/modal_cover.png`
                  }
                  alt="no-preview"
                />
              </MM.BookCoverImg>
              <MM.BookCoverText>
                <div id="title">{title || "제목"}</div>
              </MM.BookCoverText>
            </MM.BookCover>
            <MM.Text>
              <MM.ModalTitle>
                <div id="titleText">제목</div>
                <input
                  id="NewTitle"
                  type="text"
                  placeholder="제목을 입력해 주세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </MM.ModalTitle>
              <div id="line"></div>
              <MM.Cover>
                <MM.CoverText>표지</MM.CoverText>
                <MM.CoverImg>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="file-input"
                  />
                  <button
                    id="addCover"
                    type="button"
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
                  >
                    {!coverImage && (
                      <img
                        id="addimg"
                        src={`${process.env.PUBLIC_URL}/images/coverImgAdd.png`}
                        alt="Add cover"
                      />
                    )}
                    {coverImage && (
                      <img
                        src={URL.createObjectURL(coverImage)}
                        alt="Cover Preview"
                        style={{ maxWidth: "320px", maxHeight: "70px" }}
                      />
                    )}
                  </button>
                </MM.CoverImg>
              </MM.Cover>
              <MM.DescriptionTitle>
                <span id="desTitle">책 설명</span>
                <span id="textlength">(100자 이내)</span>
              </MM.DescriptionTitle>
              <MM.DescriptionText>
                <textarea
                  id="NewDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </MM.DescriptionText>
              <MM.Keyword>
                <MM.KeywordTitle>#키워드 선택</MM.KeywordTitle>
                <MM.KeywordButtons>
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
                </MM.KeywordButtons>
              </MM.Keyword>
            </MM.Text>
          </MM.ModalContent>
          <MM.Create>
            <button id="create" onClick={handleMakeBook}>
              생성
            </button>
          </MM.Create>
        </MM.ModalWrap>
      </Modal>
    </MM.Container>
  );
};

export default MyBookMake;
