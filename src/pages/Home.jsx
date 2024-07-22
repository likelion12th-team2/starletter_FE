import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as H from "../styles/StyledHome";
import axios from "axios";

const Home = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // useEffect(() => {
  //   // localStorage에 저장된 모든 항목을 콘솔에 출력
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     const value = localStorage.getItem(key);
  //     console.log(`Key: ${key}, Value: ${value}`);
  //   }
  // }, []);

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
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

  const goHome = () => {
    navigate(`/`);
  };

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
  };

  const goMyBook = () => {
    if (isLoggedIn) {
      navigate("/mybook");
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

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  return (
    <H.Container>
      <header>
        <H.Nav>
          <H.NavContent>
            <H.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </H.Logo>
            <H.Menu>
              <H.MovingContent>
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
              </H.MovingContent>
              <div id="bar"> | </div>
              <H.Account>
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
              </H.Account>
            </H.Menu>
          </H.NavContent>
        </H.Nav>
      </header>
      {/* 모달창 추가 */}
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      {/*  */}
      <H.Body>
        <H.Detail>
          <img
            id="img"
            src={`${process.env.PUBLIC_URL}/images/Slogan.svg`}
            alt="슬로건"
          />
        </H.Detail>
        <H.Library>
          <img
            id="img1"
            src={`${process.env.PUBLIC_URL}/images/Main_lib.svg`}
            alt="내서재"
          />
          <H.LibBtn onClick={goMyBook}>
            <div id="detail">내 서재로 가기</div>
          </H.LibBtn>
        </H.Library>
        <H.Bookroom>
          <img
            id="img2"
            src={`${process.env.PUBLIC_URL}/images/Main_book.svg`}
            alt="책방"
          />
          <H.BookBtn onClick={goLib}>
            <div id="detail">책방으로 이동</div>
          </H.BookBtn>
        </H.Bookroom>
        <H.Funeral>
          <div id="detail">
            가장 가까운 반려동물 전문 장례식장을 보여드릴게요{" "}
          </div>
          <H.FuCont>
            <H.Fu1>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Lib1.svg`}
                alt="1번"
              />
              <div id="title">펫포레스트 경기 광주점</div>
              <div id="adress">경기도 광주시 오포안로 77</div>
            </H.Fu1>
            <H.Fu2>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Lib2.svg`}
                alt="2번"
              />
              <div id="title">21그램 경기광주 1호점</div>
              <div id="adress">경기도 광주시 매자리길 185-35</div>
            </H.Fu2>
            <H.Fu3>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Lib3.svg`}
                alt="3번"
              />
              <div id="title">포포즈 경기 광주점</div>
              <div id="adress">경기도 광주시 산수로 409-11</div>
            </H.Fu3>
          </H.FuCont>
        </H.Funeral>
        <H.Search>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search.svg`}
            alt="search"
          />
          <input
            id="text"
            type="text"
            placeholder="지역이나 키워드를 검색해 보세요"
          />
        </H.Search>
        <H.Product>
          <div id="detail">
            세상에 하나뿐인 나의 반려동물을 기억할 수 있는 상품을 추천해 드려요
          </div>
          <H.ProCont1>
            <H.Pro1>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Pro1.svg`}
                alt="1번"
              />
              <div id="title">[양모아네뜨] 아트돌 양모펠트 강아지 전신</div>
              <H.Cost1>
                <div id="sale">28%</div>
                <div id="price">900,000원</div>
              </H.Cost1>
              <H.Price1>650,000원</H.Price1>
            </H.Pro1>
            <H.Pro2>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Pro2.svg`}
                alt="2번"
              />
              <div id="title">[퐁자씨] 우리집 쪼꼬미 키링🐶🐱ㅣ모루인형</div>
              <H.Cost2>
                <div id="sale">30%</div>
                <div id="price">40,000원</div>
              </H.Cost2>
              <H.Price2>32,000원</H.Price2>
            </H.Pro2>
            <H.Pro3>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Pro3.svg`}
                alt="3번"
              />
              <div id="title">
                [달콤펫] 반려동물초상화(중) 달콤펫초상화 입체주문제작
              </div>
              <H.Cost3>
                <div id="sale"></div>
                <div id="price"></div>
              </H.Cost3>
              <H.Price3>130,000원</H.Price3>
            </H.Pro3>
          </H.ProCont1>
          <H.ProCont2>
            <H.Pro4>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Pro4.svg`}
                alt="4번"
              />
              <div id="title">[비자르] 반려 동물 유골 주얼리</div>
              <H.Cost4>
                <div id="sale"></div>
                <div id="price"></div>
              </H.Cost4>
              <H.Price4>95,000원</H.Price4>
            </H.Pro4>
            <H.Pro5>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Pro5.svg`}
                alt="5번"
              />
              <div id="title">
                [더해빙] 반려동물 추모 액자 납골당 주문제작 아크릴 메모리얼
              </div>
              <H.Cost5>
                <div id="sale">12%</div>
                <div id="price">37,300원</div>
              </H.Cost5>
              <H.Price5>33,000원</H.Price5>
            </H.Pro5>
            <H.Pro6>
              <img
                id="pic"
                src={`${process.env.PUBLIC_URL}/images/Pro6.svg`}
                alt="6번"
              />
              <div id="title">
                [소풍] 소동물 수의보 - 햄스터, 토끼, 고슴도치등 이불싸개
              </div>
              <H.Cost6>
                <div id="sale">5%</div>
                <div id="price">40,000원</div>
              </H.Cost6>
              <H.Price6>38,000원</H.Price6>
            </H.Pro6>
          </H.ProCont2>
        </H.Product>
      </H.Body>
      <footer>
        <H.Footer>
          <H.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </H.Introduction>
        </H.Footer>
      </footer>
    </H.Container>
  );
};

export default Home;
