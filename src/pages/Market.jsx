import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyPageModal from "./MyPageModal";
import * as M from "../styles/StyledMarket";
import axios from "axios";

const Market = ({ nickname }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myPageRef = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // 로그인 상태 확인 (예시: localStorage에 토큰이 있는지 확인)
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goMyBook = () => {
    navigate(`/mybook`);
  };

  const goLib = () => {
    navigate(`/library`);
  };

  const profile = {
    // image: 'path_to_profile_image.jpg',
    name: nickname,
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/logout/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 저장된 토큰 사용
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

  const goFun = () => {
    navigate(`/funeral`);
  };

  const goMarket = () => {
    navigate(`/market`);
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
                  서재
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
      <MyPageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        profile={profile}
        anchorRef={myPageRef}
      />
      <M.Body>
        <M.Title>
          세상에 하나뿐인 나의 반려동물을 기억할 수 있는 상품을 추천해 드려요
        </M.Title>
        <M.ProList>
          <M.Pro1>
            <img
              id="pic"
              src={`${process.env.PUBLIC_URL}/images/Pro1.svg`}
              alt="1번"
            />
            <div id="title">[양모아네뜨] 아트돌 양모펠트 강아지 전신</div>
            <M.Cost1>
              <div id="sale">28%</div>
              <div id="price">900,000원</div>
            </M.Cost1>
            <M.Price1>650,000원</M.Price1>
          </M.Pro1>
          <M.Pro2>
            <img
              id="pic"
              src={`${process.env.PUBLIC_URL}/images/Pro2.svg`}
              alt="2번"
            />
            <div id="title">[퐁자씨] 우리집 쪼꼬미 키링🐶🐱ㅣ모루인형</div>
            <M.Cost2>
              <div id="sale">30%</div>
              <div id="price">40,000원</div>
            </M.Cost2>
            <M.Price2>32,000원</M.Price2>
          </M.Pro2>
          <M.Pro3>
            <img
              id="pic"
              src={`${process.env.PUBLIC_URL}/images/Pro3.svg`}
              alt="3번"
            />
            <div id="title">
              [달콤펫] 반려동물초상화(중) 달콤펫초상화 입체주문제작
            </div>
            <M.Cost3>
              <div id="sale"></div>
              <div id="price"></div>
            </M.Cost3>
            <M.Price3>130,000원</M.Price3>
          </M.Pro3>
          <M.Pro4>
            <img
              id="pic"
              src={`${process.env.PUBLIC_URL}/images/Pro4.svg`}
              alt="4번"
            />
            <div id="title">[비자르] 반려 동물 유골 주얼리</div>
            <M.Cost4>
              <div id="sale"></div>
              <div id="price"></div>
            </M.Cost4>
            <M.Price4>95,000원</M.Price4>
          </M.Pro4>
          <M.Pro5>
            <img
              id="pic"
              src={`${process.env.PUBLIC_URL}/images/Pro5.svg`}
              alt="5번"
            />
            <div id="title">
              [더해빙] 반려동물 추모 액자 납골당 주문제작 아크릴 메모리얼
            </div>
            <M.Cost5>
              <div id="sale">12%</div>
              <div id="price">37,300원</div>
            </M.Cost5>
            <M.Price5>33,000원</M.Price5>
          </M.Pro5>
          <M.Pro6>
            <img
              id="pic"
              src={`${process.env.PUBLIC_URL}/images/Pro6.svg`}
              alt="6번"
            />
            <div id="title">
              [소풍] 소동물 수의보 - 햄스터, 토끼, 고슴도치등 이불싸개
            </div>
            <M.Cost6>
              <div id="sale">5%</div>
              <div id="price">40,000원</div>
            </M.Cost6>
            <M.Price6>38,000원</M.Price6>
          </M.Pro6>
        </M.ProList>
      </M.Body>
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
            <div id="sns">인스타 아이디</div>
          </M.Introduction>
        </M.Footer>
      </footer>
    </M.Container>
  );
};

export default Market;
