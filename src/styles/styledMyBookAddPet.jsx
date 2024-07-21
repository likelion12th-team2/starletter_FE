import { styled } from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 120px;
  background: #002951;
  color: #002951;
`;

export const Logo = styled.div`
  margin-left: 80px;

  #logo {
    margin-top: -20px;
    width: 140px;
    height: 48px;
  }
`;

export const NavContent = styled.div`
  width: 100vw;
  margin-left: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 60px;
  margin-top: 20px;

  #bar {
    color: #fff;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const MovingContent = styled.div`
  justify-content: flex-end;
  float: right;
  display: flex;
  flex-direction: row;
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 60px;

  #library {
    cursor: pointer;
    color: #efd26a;
  }

  #bookroom {
    cursor: pointer;
  }

  #comparison {
    cursor: pointer;
  }

  #market {
    cursor: pointer;
  }
`;

export const Account = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  gap: 60px;
  line-height: normal;
  margin-right: 63px;

  #login {
    cursor: pointer;
  }

  #join {
    cursor: pointer;
  }

  #mypage {
    cursor: pointer;
  }

  #logout {
    cursor: pointer;
  }
`;

// body
export const bodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Color-1, #002951);
`;
export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 64px;
  margin-bottom: 83px;
`;
export const Input = styled.div`
  width: 892px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-bottom: 63px;
`;
export const PetName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #petName {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #petNameInput {
    width: 650px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--gray-10, #ebeaea);
    border: none;
    margin-left: auto;

    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:focus {
      outline: none; /* focus 시 아웃라인 제거 */
      box-shadow: none; /* focus 시 그림자 제거 */
    }
  }
`;
export const Birth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #birth {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #DatePickerWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;

    width: 650px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--gray-10, #ebeaea);
  }
  #dateIcon {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: 33px;
  }
`;
export const DatePicker = styled.div`
  color: #999797;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DatePickerInput = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  background: var(--gray-10, #ebeaea);
  border: none;

  .react-datepicker__day--outside-month {
    color: #a8a8a8 !important;
    pointer-events: none;
  }
  color: #999797;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &::placeholder {
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:focus {
    outline: none; /* focus 시 아웃라인 제거 */
    box-shadow: none; /* focus 시 그림자 제거 */
  }
`;

export const FixedDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #fixedDate {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #DatePickerWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;

    width: 650px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--gray-10, #ebeaea);
  }
  #dateIcon {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: 33px;
  }
`;

export const AddPetBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 137px;

  #addPetBtn {
    width: 221px;
    height: 70px;
    flex-shrink: 0;

    border-radius: 50px;
    background: var(--Color-2, #efd26a);
    box-shadow: 0px 0px 4px 5px rgba(239, 210, 106, 0.3);
    border: none;

    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
      box-shadow: 0px 0px 10px 5px rgba(260, 230, 120, 0.6);
    }
  }
`;

export const Footer = styled.div`
  bottom: 0;
  height: 222px;
  background: #37506e;
  flex-shrink: 0;
`;

export const Introduction = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  #introduce {
    margin-top: 30px;
  }

  #logo {
    margin-top: 5px;
    width: 51px;
    height: 15px;
  }

  #team {
    margin-top: 20px;
  }

  #name {
    margin-top: 7px;
  }

  #sns {
    margin-top: 7px;
  }
`;
