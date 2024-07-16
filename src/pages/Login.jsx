import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "../styles/StyledLogin";

const Login = () => {
  const navigate = useNavigate();

  const goJoin = () => {
    navigate(`/join`);
  };

  return (
    <L.Container>
      <header>
        <L.Nav>
          <L.NavContent>
            <L.Logo>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </L.Logo>
            <L.MovingContent>
              <div id="library">서재</div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </L.MovingContent>
            <div id="bar"> | </div>
            <L.Account>
              <div id="login">로그인</div>
              <div id="join" onClick={goJoin}>
                회원가입
              </div>
            </L.Account>
          </L.NavContent>
        </L.Nav>
      </header>
      <L.Content>
        <L.Firm>
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
          <div id="detail">나의 별에게 보내는 편지</div>
        </L.Firm>
        <L.Login>
          <L.Id>
            <input id="id" type="id" placeholder="아이디를 입력하세요" />
          </L.Id>
          <L.Pw>
            <input
              id="pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </L.Pw>
        </L.Login>
        <L.Button>
          <div id="detail">로그인</div>
        </L.Button>
        <L.Condition>
          <div id="join" onClick={goJoin}>
            회원가입하기
          </div>
          <div id="bar"> | </div>
          <div id="pw">비밀번호 찾기</div>
        </L.Condition>
      </L.Content>
      <footer>
        <L.Footer>
          <L.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </L.Introduction>
        </L.Footer>
      </footer>
    </L.Container>
  );
};

export default Login;
