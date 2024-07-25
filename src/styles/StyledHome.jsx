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
  }

  #logout {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  width: 100%;
  background: #002951;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;

  #main {
    margin-top: 80px;
    margin-left: 100px;
    margin-bottom: 120px;
  }
`;

export const List = styled.div`
  // margin-top: 80px;
  display: flex;
  margin-top: -50px;
  flex-direction: column;
  gap: 33px;
  width: 200px;
`;

export const Lib = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  text-align: center;
  align-items: center;
  justify-content: center;

  #library {
    margin-right: auto;
    width: 65px;
    height: 65px;
    flex-shrink: 0;
  }

  #detlib {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Book = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  text-align: center;
  align-items: center;
  justify-content: center;

  #bookroom {
    margin-right: auto;
    width: 65px;
    height: 65px;
    flex-shrink: 0;
  }

  #detbook {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Fun = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  text-align: center;
  align-items: center;
  justify-content: center;

  #funeral {
    margin-right: auto;
    width: 65px;
    height: 65px;
    flex-shrink: 0;
  }

  #detfun {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Mar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  text-align: center;
  align-items: center;
  justify-content: center;

  #market {
    margin-right: auto;
    width: 65px;
    height: 65px;
    flex-shrink: 0;
  }

  #detmar {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
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

  #sns {
    margin-top: 7px;
  }
`;
