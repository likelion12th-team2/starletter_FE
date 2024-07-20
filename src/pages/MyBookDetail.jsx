import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MB from "../styles/styledMyBookDetail";
import Modal from "react-modal"; // 모달
import PropTypes from "prop-types"; // 책 구현

const MyBookDetail = ({ pages = [] }) => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const goMyBook = () => {
    navigate(`/mybook`);
  };

  // 모달창 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPostitContent, setSelectedPostitContent] = useState(""); //포스트잇 선택시 해당 내용 보임

  const openModal = (content) => {
    setSelectedPostitContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPostitContent("");
    setModalIsOpen(false);
  };

  // 포스트잇 (댓글)
  const postits = [
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
  ];

  //책 구현
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

  return (
    <MB.Container>
      <header>
        <MB.Nav>
          <MB.NavContent>
            <MB.Logo>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </MB.Logo>
            <MB.MovingContent>
              <div id="library" onClick={goMyBook}>
                내 서재
              </div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </MB.MovingContent>
            <div id="bar"> | </div>
            <MB.Account>
              <div id="login" onClick={goLogin}>
                로그인
              </div>
              <div id="join" onClick={goJoin}>
                회원가입
              </div>
            </MB.Account>
          </MB.NavContent>
        </MB.Nav>
      </header>
      <MB.BodyContainer>
        <MB.NewBook>
          <MB.BookCover>
            <MB.BookCoverImg>
              <img
                id="MycoverImg"
                src={`${process.env.PUBLIC_URL}/images/mybookCover.png`}
                alt="Mycover1"
              />
            </MB.BookCoverImg>
            <MB.BookCoverText>
              <div id="title">쪼꼬랑 누나 여행기록</div>
            </MB.BookCoverText>
          </MB.BookCover>
          <MB.BookDetail>
            <div id="title">쪼꼬랑 누나 여행기록</div>
            <div id="writer">김별</div>
            <div id="writtendate">마지막 수정일: 2024.07.17</div>
            <div id="ps">
              쪼꼬는 12살 푸들할머니 그래도 내 눈에는 영원히 애기 산책나가면
              인기 짱 많은 아파트 인싸 강아지 12년간 이곳저곳 놀러다녔던 기억을
              모아🌈🐕
            </div>
          </MB.BookDetail>
        </MB.NewBook>
        <MB.MyBook>
          <MB.BookContainer>
            <MB.Page onClick={handlePrevPage} disabled={currentPage === 0}>
              <MB.PageContent>
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
              </MB.PageContent>
            </MB.Page>
            <MB.Page
              onClick={handleNextPage}
              disabled={currentPage >= contents.length - 1}
            >
              <MB.PageContent>
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
              </MB.PageContent>
            </MB.Page>
          </MB.BookContainer>
        </MB.MyBook>
        <MB.WriteNewPage>
          <button id="writeNewPage">새 페이지 쓰기</button>
        </MB.WriteNewPage>
        <MB.Section>
          <div id="section"></div>
        </MB.Section>
        <MB.PostitWrap>
          <MB.PostitList>
            {postits.map((postit) => (
              <MB.Postit
                key={postit.id}
                onClick={() => openModal(postit.content)}
              >
                <div id="content">{postit.content}</div>
              </MB.Postit>
            ))}
          </MB.PostitList>
        </MB.PostitWrap>
      </MB.BodyContainer>
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
            <div id="sns">인스타 아이디</div>
          </MB.Introduction>
        </MB.Footer>
      </footer>

      {/* 모달창 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
        <MB.ModalContent>{selectedPostitContent}</MB.ModalContent>
      </Modal>
    </MB.Container>
  );
};

MyBookDetail.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.node),
};

MyBookDetail.defaultProps = {
  pages: [],
};

export default MyBookDetail;
