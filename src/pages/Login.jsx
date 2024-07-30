import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      console.log("로그인 성공!");

      // 서버의 응답 데이터 출력
      console.log("서버 응답:", response.data);

      const token = response.data.key || response.data.data?.key;
      if (token) {
        localStorage.setItem("token", response.data.key);
        console.log("토큰 저장 성공:", token);

        // 메인 페이지로 이동
        navigate("/");
      } else {
        console.log("토큰이 응답 데이터에 없습니다.");
        setMessage("로그인 응답에 토큰이 없습니다.");
      }
    } catch (error) {
      setMessage(error.message);
      if (error.response && error.response.status === 401) {
        console.log("잘못된 아이디 또는 비밀번호입니다.");
        setMessage("잘못된 아이디 또는 비밀번호입니다.");
      } else {
        console.log("로그인 실패:", error.message);
        setMessage("아이디와 비밀번호를 확인해주세요.");
      }
    }
  };

  const goJoin = () => {
    navigate(`/join`);
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

  const goLib = () => {
    navigate("/library");
  };

  return (
    <L.Container>
      <header>
        <L.Nav>
          <L.NavContent>
            <L.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </L.Logo>
            <L.Menu>
              <L.MovingContent>
                <div id="library">내 서재</div>
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
                <div id="login">로그인</div>
                <div id="join" onClick={goJoin}>
                  회원가입
                </div>
              </L.Account>
            </L.Menu>
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
                name="username"
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
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </L.Pw>
          </L.Login>
          {message && <L.Message>{message}</L.Message>}
          <L.Button type="submit">
            <button id="detail">로그인</button>
            {/* <div id="detail">로그인</div> */}
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
            <L.Git>
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
            </L.Git>
          </L.Introduction>
        </L.Footer>
      </footer>
    </L.Container>
  );
};

export default Login;
