import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as AP from "../styles/styledMyBookAddPet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyBookAddPet = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  // 생일 날짜 선택
  const [birthDate, setBirthDate] = useState(null);
  const [fixedDate, setFixedDate] = useState(null);

  return (
    <AP.Container>
      <header>
        <AP.Nav>
          <AP.NavContent>
            <AP.Logo>
              <img
                id="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </AP.Logo>
            <AP.MovingContent>
              <div id="library">내 서재</div>
              <div id="bookroom">책방</div>
              <div id="comparison">장례식장 비교</div>
              <div id="market">마켓</div>
            </AP.MovingContent>
            <div id="bar"> | </div>
            <AP.Account>
              <div id="login" onClick={goLogin}>
                로그인
              </div>
              <div id="join" onClick={goJoin}>
                회원가입
              </div>
            </AP.Account>
          </AP.NavContent>
        </AP.Nav>
      </header>
      {/*  */}
      <body>
        <AP.bodyContainer>
          <AP.Title>아직 등록한 반려동물이 없어요</AP.Title>
          <AP.Input>
            <AP.PetName>
              <div id="petName">반려동물 이름</div>
              <input
                id="petNameInput"
                type="text"
                placeholder="반려동물의 이름을 입력해 주세요"
              />
            </AP.PetName>
            <AP.Birth>
              <div id="birth">생일</div>
              <div id="DatePickerWrap">
                <DatePicker
                  dateFormat="yyyy.MM.dd" // 날짜 형태
                  shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                  maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  customInput={<AP.DatePickerInput />} // styled-components로 감싼 커스텀>
                  placeholderText="연도-월-일"
                />
                <img
                  id="dateIcon"
                  src={`${process.env.PUBLIC_URL}/images/calendar.png`}
                  alt="calendar"
                />
              </div>
            </AP.Birth>
            <AP.FixedDate>
              <div id="fixedDate">기일</div>
              <div id="DatePickerWrap">
                <DatePicker
                  dateFormat="yyyy.MM.dd" // 날짜 형태
                  shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                  maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                  selected={fixedDate}
                  onChange={(date) => setFixedDate(date)}
                  customInput={<AP.DatePickerInput />} // styled-components로 감싼 커스텀>
                  placeholderText="연도-월-일"
                />
                <img
                  id="dateIcon"
                  src={`${process.env.PUBLIC_URL}/images/calendar.png`}
                  alt="calendar"
                />
              </div>
            </AP.FixedDate>
          </AP.Input>
          <AP.AddPetBtn>
            <button id="addPetBtn">반려동물 추가</button>
          </AP.AddPetBtn>
        </AP.bodyContainer>
      </body>
      {/*  */}
      <footer>
        <AP.Footer>
          <AP.Introduction>
            <div id="introduce">나의 별에게 보내는 편지</div>
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
            />
            <div id="team">멋쟁이사자처럼 동덕여자대학교 12기 효녀손팀</div>
            <div id="name">전지영, 하성언, 김하희, 김민주, 정세윤</div>
            <div id="sns">인스타 아이디</div>
          </AP.Introduction>
        </AP.Footer>
      </footer>
    </AP.Container>
  );
};

export default MyBookAddPet;
