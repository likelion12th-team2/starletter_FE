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
  cursor: pointer;
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
    color: #efd26a;
    cursor: pointer;
  }

  #logout {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #002951;
`;

export const Act = styled.div`
  width: 1500px;
  margin-bottom: 212px;
`;

export const Title = styled.div`
  margin-top: 40px;
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.875px;
`;

export const Sympathy = styled.div`
  margin-top: 131px;
  display: flex;
  flex-direction: column;
`;

export const Heart = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  gap: 10px;

  #img {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }

  #heart {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.45px;
  }
`;

export const Symlist = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  gap: 45px;
  // flex-wrap: wrap;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: center;
`;

export const Book = styled.div`
  width: 233.284px;
  height: 315.477px;
  flex-shrink: 0;
  border-radius: 6.395px;
  border: 0.479px solid rgba(133, 133, 133, 0.5);
  background: #87a8cf;
  display: flex;
  flex-direction: row;
  float: left;

  #bookcover {
    float: left;
    width: 233.284px;
    height: 213.34px;
    flex-shrink: 0;
    // background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    margin-left: -1px;
    margin-top: 54px;
    object-fit: cover;
  }

  #title {
    margin-left: 170px;
    position: absolute;
    // width: 44.723px;
    // height: 143.838px;
    flex-shrink: 0;
    background: #fff;
    border-radius: 0px 0px 9.28px 9.28px;
    box-shadow: 0px 7.424px 7.424px 0px rgba(0, 0, 0, 0.25);

    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 5px;

    background: #fff;
    padding-top: 5.57px;
    padding-right: 5.74px;
    padding-left: 20.21px;
    padding-bottom: 20px;

    writing-mode: vertical-rl;

    white-space: nowrap; /* 텍스트를 한 줄로 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 부분을 ...으로 표시 */
  }
`;

export const BookDetail = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  margin-right: auto;

  #title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 2px;
  }

  #author {
    color: var(--gray-30, #c2c1c1);
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: auto;
  }
`;

export const BookCover = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

export const Symnull = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 84px;

  #sym1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.625px;
  }

  #sym2 {
    color: #c2c1c1;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.375px;
  }
`;

export const Comment = styled.div`
  margin-top: 122px;
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  gap: 10px;

  #img {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }

  #comment {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.45px;
  }
`;

export const Comlist = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  float: left;
  // flex-wrap: wrap;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
`;

export const Post = styled.div`
  margin-top: 22px;
  width: 206px;
  height: 225px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #c4def8;
  text-align: center;
  align-items: center;
  justify-content: space-between; /* 내부 요소들을 위아래로 분리 */
  display: flex;
  flex-direction: column;

  #detail {
    width: 190px;
    height: 300px;
    color: #000;
    margin-top: 18px;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;

    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 부분을 ...으로 표시 */
    white-space: pre-wrap; /* 줄바꿈을 허용 */
  }
`;

export const Del = styled.div`
  margin-bottom: 16px;
  width: 97px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #efd26a;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;

  #btn {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    border: none;
    background: transparent;
    margin-top: 11px;
    line-height: normal;
  }
`;

export const Comnull = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 124px;

  #com1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.625px;
  }

  #com2 {
    color: #c2c1c1;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.375px;
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
`;

export const Git = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: row;

  #github {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }

  #gitback {
    margin-left: 10px;
    color: #fff;
    margin-top: 7px;
  }

  #slash {
    margin-left: 5px;
    margin-right: 5px;
    color: #fff;
    margin-top: 7px;
  }

  #gitfront {
    color: #fff;
    margin-top: 7px;
  }
`;

export const ConfirmModal = styled.div`
  width: 332px;
  height: 233px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #002951;
  background: #e8f2ff;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: auto;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 75px;
`;

export const Detail1 = styled.div`
  display: flex;
  flex-direction: row;

  #really {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #delete {
    color: #ff2020;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #do {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 37px;
  gap: 50px;

  #yes {
    display: flex;
    width: 90px;
    height: 47px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #b2d9ff;
    border: none;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #no {
    display: flex;
    width: 90px;
    height: 47px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    border: none;
    background: #b2d9ff;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
