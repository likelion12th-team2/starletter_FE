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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  background: #002951;
  justify-content: center;
`;

export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.525px;
  margin-top: 91px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 124px;
  gap: 20px;
  text-align: center;
  algin-items: center;
  justify-content: center;
  width: 360px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;

  #name {
    justify-content: flex-start;
    color: #fff;
    font-family: "Pretendard Variable";
    margin-right: auto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const DetName = styled.div`
  width: 243px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 19.212px;
  background: #e8f2ff;

  #inname {
    margin-top: 17px;
    width: 200px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: transparent;
  }

  input:focus {
    outline: none;
    border: none;
  }
`;

export const Nickname = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;

  #nickname {
    margin-right: auto;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const DetNick = styled.div`
  width: 243px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 19.212px;
  background: #e8f2ff;

  #innick {
    margin-top: 17px;
    width: 200px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: transparent;
  }

  input:focus {
    outline: none;
    border: none;
  }
`;

export const Button = styled.div`
  width: 167.143px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 39.857px;
  background: #efd26a;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 86px;
  margin-bottom: 187px;

  #btn {
    margin-top: 15px;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: transparent;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 30px;
  color: #ff6161;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
