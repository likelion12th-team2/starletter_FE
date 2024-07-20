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
    color: #efd26a;
  }

  #join {
    cursor: pointer;
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

export const Firm = styled.div`
  text-align: center;
  margin-top: 60px;

  #logo {
    width: 199px;
    height: 68px;
  }

  #detail {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 23.976px;
    font-style: normal;
    font-weight: 400;
    margin-top: 25px;
    line-height: normal;
  }
`;

export const Login = styled.div`
  margin-top: 130px;
`;

export const Id = styled.div`
  //   margin-left: 420px;
  text-align: center;
  width: 603px;
  height: 85px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ebeaea;

  #id {
    margin-top: 30px;
    margin-left: 35px;
    width: 500px;
    border: none;
    background: transparent;
    float: left;
    color: #999797;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #id:focus {
    outline: none;
  }
`;

export const Pw = styled.div`
  margin-top: 24px;
  width: 603px;
  height: 85px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #ebeaea;

  #pw {
    margin-top: 30px;
    margin-left: 35px;
    border: none;
    background: transparent;
    float: left;
    color: #999797;
    font-family: "Pretendard Variable";
    width: 500px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #pw:focus {
    outline: none;
  }
`;

export const Message = styled.div`
  color: #ff6161;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 0;
  // margin-left: 81px;
  margin-top: 50px;
`;

export const Button = styled.div`
  text-align: center;
  margin-top: 80px;
  width: 250px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #efd26a;
  align-items: center;
  cursor: pointer;

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

export const Condition = styled.div`
  margin-top: 26px;
  display: flex;
  margin-bottom: 100px;
  flex-direction: row;
  gap: 15px;

  #join {
    color: #fff;
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  #bar {
    width: 1px;
    height: 22.96px;
    background: #fff;
  }

  #pw {
    color: #999797;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
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
