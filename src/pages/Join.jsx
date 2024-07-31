import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as J from "../styles/StyledJoin";
import axios from "axios";

const Join = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const [message1, setMessage1] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== password2) {
      setMessage("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      return;
    }

    console.log("username:", username);
    console.log("Password:", password);
    console.log("Password2:", password2);
    console.log("name:", name);
    console.log("nickname:", nickname);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/register/",
        {
          username: username,
          password: password,
          name: name,
          nickname: nickname,
        }
      );
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.username) {
          setMessage(error.response.data.message);
        }
        if (error.response.data.nickname) {
          setMessage(error.response.data.message);
        }
        if (!error.response.data.username && !error.response.data.nickname) {
          setMessage(error.response.data.message);
        }
      } else {
        setMessage(error.response.data.message);
      }
    }
  };

  const goLogin = () => {
    navigate(`/login`);
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
    <J.Container>
      <header>
        <J.Nav>
          <J.NavContent>
            <J.Logo onClick={goHome}>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </J.Logo>
            <J.Menu>
              <J.MovingContent>
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
              </J.MovingContent>
              <div id="bar"> | </div>
              <J.Account>
                <div id="login" onClick={goLogin}>
                  로그인
                </div>
                <div id="join">회원가입</div>
              </J.Account>
            </J.Menu>
          </J.NavContent>
        </J.Nav>
      </header>
      <form onSubmit={handleSubmit}>
        <J.Content>
          <J.Title>
            <div id="detail">회원가입</div>
          </J.Title>
          <J.Essential>
            <J.Id>
              <div id="id">아이디*</div>
              <J.IdBox>
                <input
                  id="id"
                  type="id"
                  placeholder="아이디를 입력하세요"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </J.IdBox>
            </J.Id>
            <J.Pw>
              <div id="pw">비밀번호*</div>
              <J.PwBox>
                <input
                  id="pw"
                  type="password"
                  placeholder="8자 이상 20자 이하 영문, 특수문자 포함"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </J.PwBox>
            </J.Pw>
            <J.RePw>
              <div id="checkpw">비밀번호 확인*</div>
              <J.ReBox>
                <input
                  id="checkpw"
                  type="password"
                  placeholder="비밀번호를 다시 입력해 주세요"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
              </J.ReBox>
            </J.RePw>
            <J.Name>
              <div id="name">보호자 이름*</div>
              <J.NameBox>
                <input
                  id="name"
                  type="text"
                  placeholder="이름을 입력해 주세요"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </J.NameBox>
            </J.Name>
            <J.Nickname>
              <div id="nickname">닉네임*</div>
              <J.NickBox>
                <input
                  id="nickname"
                  type="text"
                  placeholder="닉네임을 입력해 주세요"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                />
              </J.NickBox>
            </J.Nickname>
          </J.Essential>
          {message && <J.Message>{message}</J.Message>}
          <J.Button type="submit">
            <button id="detail">회원가입하기</button>
          </J.Button>
        </J.Content>
      </form>
      <footer>
        <J.Footer>
          <J.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <J.Git>
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
            </J.Git>
          </J.Introduction>
        </J.Footer>
      </footer>
    </J.Container>
  );
};

export default Join;
