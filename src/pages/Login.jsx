import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("폼 제출됨");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        {
          username: username,
          password: password,
        }
      );
      // 로그인 성공 시 토큰 정보를 로컬 스토리지에 저장
      localStorage.setItem("authToken", response.data.token);
      setMessage("로그인 성공!");
      // 토큰 정보가 있는 경우 다음 페이지로 이동
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage("잘못된 아이디 또는 비밀번호입니다.");
      } else {
        setMessage("로그인 실패: " + error.message);
      }
    }
  };

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

      <form onSubmit={handleSubmit}>
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
              <input
                id="id"
                type="id"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              ></input>
            </L.Id>
            <L.Pw>
              <input
                id="pw"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </L.Pw>
          </L.Login>
          <L.Button type="submit">
            <div id="detail" type="submit">
              로그인
            </div>
          </L.Button>
          <L.Condition>
            <div id="join" onClick={goJoin}>
              회원가입하기
            </div>
            <div id="bar"> | </div>
            <div id="pw">비밀번호 찾기</div>
          </L.Condition>
        </L.Content>
      </form>

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
      {message && <p>{message}</p>}
    </L.Container>
  );
};

export default Login;
