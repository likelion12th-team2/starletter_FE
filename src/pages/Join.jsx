import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as J from "../styles/StyledJoin";

const Join = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
  };

  return (
    <J.Container>
      <header>
        <J.Nav>
          <J.NavContent>
            <J.Logo>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </J.Logo>
            <J.MovingContent>
              <div id="library">서재</div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </J.MovingContent>
            <div id="bar"> | </div>
            <J.Account>
              <div id="login" onClick={goLogin}>
                로그인
              </div>
              <div id="join">회원가입</div>
            </J.Account>
          </J.NavContent>
        </J.Nav>
      </header>
      <J.Content>
        <J.Title>
          <div id="detail">회원가입</div>
        </J.Title>
        <J.Essential>
          <J.Id>
            <div id="detail">아이디*</div>
            <J.IdBox>
              <input id="detail" type="id" placeholder="아이디를 입력하세요" />
            </J.IdBox>
          </J.Id>
          <J.Pw>
            <div id="detail">비밀번호*</div>
            <J.PwBox>
              <input
                id="detail"
                type="password"
                placeholder="8자 이상 20자 이하 영문, 특수문자 포함"
              />
            </J.PwBox>
          </J.Pw>
          <J.RePw>
            <div id="detail">비밀번호 확인*</div>
            <J.ReBox>
              <input
                id="detail"
                type="password"
                placeholder="비밀번호를 다시 입력해 주세요"
              />
            </J.ReBox>
          </J.RePw>
          <J.Name>
            <div id="detail">보호자 이름*</div>
            <J.NameBox>
              <input
                id="detail"
                type="text"
                placeholder="이름을 입력해 주세요"
              />
            </J.NameBox>
          </J.Name>
          <J.Nickname>
            <div id="detail">닉네임*</div>
            <J.NickBox>
              <input
                id="detail"
                type="text"
                placeholder="닉네임을 입력해 주세요"
              />
            </J.NickBox>
          </J.Nickname>
        </J.Essential>
        <J.Button>
          <div id="detail">회원가입하기</div>
        </J.Button>
      </J.Content>
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
            <div id="sns">인스타 아이디</div>
          </J.Introduction>
        </J.Footer>
      </footer>
    </J.Container>
  );
};

export default Join;
