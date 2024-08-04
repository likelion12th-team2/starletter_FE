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
    color: #efd26a;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #002951;
  color: #002951;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  margin-top: 120px;
  color: #efd26a;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Essential = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 112px;
`;

export const Id = styled.div`
  display: flex;
  flex-direction: row;

  #id {
    margin-top: 30px;
    float: left;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const IdBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 650px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ebeaea;

  #id {
    border: none;
    background: transparent;
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    margin-left: 37px;
    width: 550px;
    margin-top: 0px;
  }

  #id:focus {
    outline: none;
  }
`;

export const Pw = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;

  #pw {
    margin-top: 30px;
    float: left;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const PwBox = styled.div`
  width: 650px;
  height: 90px;
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ebeaea;

  #pw {
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    margin-left: 37px;
    margin-top: 0px;
    border: none;
    background: transparent;
    width: 550px;
  }

  #pw:focus {
    outline: none;
  }
`;

export const RePw = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  gap: 93px;
  align-items: flex-start;
  text-align: left;

  #checkpw {
    margin-top: 30px;
    float: left;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ReBox = styled.div`
  width: 650px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: auto;
  background: #ebeaea;

  #checkpw {
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    margin-left: 37px;
    margin-top: 0px;
    border: none;
    background: transparent;
    width: 550px;
  }

  #checkpw:focus {
    outline: none;
  }
`;

export const Message1 = styled.div`
  color: #ff6161;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0;
  margin-left: 81px;
`;
export const Message = styled.div`
  margin-top: 50px;
  color: #ff6161;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Message3 = styled.div`
  color: #ff6161;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0;
  margin-left: 70px;
`;

export const Name = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;

  #name {
    float: left;
    margin-top: 30px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const NameBox = styled.div`
  width: 650px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: auto;
  background: #ebeaea;

  #name {
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    margin-left: 37px;
    margin-top: 0px;
    border: none;
    background: transparent;
    width: 550px;
  }

  #name:focus {
    outline: none;
  }
`;

export const Nickname = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  #nickname {
    float: left;
    margin-top: 30px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const NickBox = styled.div`
  width: 650px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: auto;
  background: #ebeaea;

  #nickname {
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    margin-left: 37px;
    margin-top: 0px;
    border: none;
    background: transparent;
    width: 550px;
  }

  #nickname:focus {
    outline: none;
  }
`;

export const Button = styled.div`
  margin-top: 65px;
  width: 250px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #efd26a;
  margin-bottom: 180px;

  &:hover {
    box-shadow: 0px 0px 4px 5px rgba(239, 210, 106, 0.3);
  }

  #detail {
    border: none;
    background: transparent;
    margin-top: 25px;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
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
    width: 80px;
    height: 25px;
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
