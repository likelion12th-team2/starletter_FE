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
    cursor: pointer;
    color: #efd26a;
  }

  #logout {
    cursor: pointer;
  }
`;

// body
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: #002951;
  text-align: center;
  align-items: center;
  justify-content: center;

  #title {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
    margin-top: 40px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  gap: 100px;
  margin-top: 77px;
  margin-bottom: 170px;
`;

export const Pet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;

  #img {
    width: 186.27px;
    height: 186.27px;
    flex-shrink: 0;
    border-radius: 50%; /* 완전히 동그랗게 만들기 */
    background-size: cover; /* 이미지가 찌부되지 않고 동그랗게 자르기 */
    background-position: center; /* 중앙을 기준으로 자르기 */
    clip-path: circle(50%); /* 원형으로 자르기 */
    box-shadow: 1.634px 3.268px 3.268px 0px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }

  #name {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 32.679px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
