import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as MM from "../styles/styledMyBookMake";
import Modal from "react-modal";
import axios from "axios";
import MyPageModal from "./MyPageModal";

const MyBookMake = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
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

  const goMyBook = () => {
    navigate(`/mybook`);
  };

  const goLib = () => {
    navigate(`/library`);
  };

  const profile = {
    name: nickname,
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/logout/",
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

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
  };

  const books = [
    {
      id: 1,
      img: "/images/petProfile1.png",
      title: "쪼꼬",
      author: "김별",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextBook = () => {
    setCurrent((prev) => (prev + 1) % books.length);
  };
  const prevBook = () => {
    setCurrent((prev) => (prev - 1 + books.length) % books.length);
  };
  const showButtons = books.length > 1;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const history = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // history.push({
    //   pathname: "/my-book",
    //   state: { title, description, coverImage },
    // });
  };

  const [selectedKeyword, setSelectedKeyword] = useState("");

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
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
              </MM.Account>
            </MM.Menu>
          </MM.NavContent>
        </MM.Nav>
      </header>
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <main>
        <MM.bodyContainer>
          <MM.Slider>
            <MM.Button onClick={prevBook} show={showButtons}>
              <img src={`${process.env.PUBLIC_URL}/images/beforebook.png`} />
            </MM.Button>
            <MM.BookContainer>
              {books.map((book, index) => {
                let large = index === current;
                let small =
                  (index === (current + 1) % books.length &&
                    current !== books.length - 1) ||
                  (index === (current - 1 + books.length) % books.length &&
                    current !== 0);
                let next =
                  index === (current + 1) % books.length &&
                  current !== books.length - 1;
                let prev =
                  index === (current - 1 + books.length) % books.length &&
                  current !== 0;
                let hidden = !(large || small);

                if (books.length === 1) {
                  large = true;
                  small = false;
                  next = false;
                  prev = false;
                  hidden = false;
                }

                return (
                  <MM.Book
                    key={book.id}
                    large={large}
                    small={small}
                    next={next}
                    prev={prev}
                    hidden={hidden}
                  >
                    <img
                      id="img"
                      src={`${process.env.PUBLIC_URL}${book.img}`}
                    />
                    <div id="title">{book.title}</div>
                    <div id="author">{book.author}</div>
                    <MM.AddBtn onClick={openModal}>
                      <img
                        id="addbtn"
                        src={`${process.env.PUBLIC_URL}/images/BookAddBtn.svg`}
                      />
                    </MM.AddBtn>
                  </MM.Book>
                );
              })}
            </MM.BookContainer>
            <MM.Button onClick={nextBook} show={showButtons}>
              <img src={`${process.env.PUBLIC_URL}/images/nextbook.png`} />
            </MM.Button>
          </MM.Slider>
        </MM.bodyContainer>
      </main>
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
            <div id="sns">인스타 아이디</div>
          </MM.Introduction>
        </MM.Footer>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
            <button id="backbtn" onClick={closeModal}>
              <img src={`${process.env.PUBLIC_URL}/images/deletModal.png`} />
            </button>
          </MM.BackButton>
          <MM.ModalContent>
            <MM.BookCover>
              <MM.BookCoverImg></MM.BookCoverImg>
              <MM.BookCoverText>
                <div id="title">제목</div>
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
                        src={coverImage}
                        alt="Cover Preview"
                        style={{
                          maxWidth: "320px",
                          maxHeight: "70px",
                        }}
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
            <button
              id="create"
              onClick={() => {
                handleSubmit();
                goMyBook();
              }}
            >
              생성
            </button>
          </MM.Create>
        </MM.ModalWrap>
      </Modal>
    </MM.Container>
  );
};

export default MyBookMake;
