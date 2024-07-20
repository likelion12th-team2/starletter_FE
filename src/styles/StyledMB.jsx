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
  }

  #title {
    margin-left: 170px;
    position: absolute;
    width: 44.723px;
    height: 143.838px;
    flex-shrink: 0;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 9.64px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 5px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    // transform: rotate(90deg);
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
  justify-content: center;
  display: flex;
  flex-direction: column;

  #detail {
    width: 200px;
    color: #000;
    margin-top: 18px;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Del = styled.div`
  margin-top: 20px;
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
