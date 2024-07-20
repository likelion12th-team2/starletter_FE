import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MM from "../styles/styledMyBookMake";
import Modal from "react-modal";

const MyBookMake = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const goMyBook = () => {
    navigate(`/MyBook`);
  };
  //책 슬라이드
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

  // 모달창 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //모달창에서 제목,사진,내용
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

  return (
    <MM.Container>
      <header>
        <MM.Nav>
          <MM.NavContent>
            <MM.Logo>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MM.Logo>
            <MM.MovingContent>
              <div id="library">내 서재</div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </MM.MovingContent>
            <div id="bar"> | </div>
            <MM.Account>
              <div id="login" onClick={goLogin}>
                로그인
              </div>
              <div id="join" onClick={goJoin}>
                회원가입
              </div>
            </MM.Account>
          </MM.NavContent>
        </MM.Nav>
      </header>
      {/*  */}
      <body>
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

                // 책이 하나만 있을 때는 큰 책으로 중앙에 위치
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
                    {/* 이미지, 제목, 작가 받아와야함 */}
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
      </body>
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
            {/*  */}
            {/* <MM.Sample>
              <div id="SampleTitle">제목</div>
              <div id="SampleImg"></div>
            </MM.Sample> */}
            <MM.BookCover>
              <MM.BookCoverImg></MM.BookCoverImg>
              <MM.BookCoverText>
                <div id="title">제목</div>
              </MM.BookCoverText>
            </MM.BookCover>
            {/*  */}
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
