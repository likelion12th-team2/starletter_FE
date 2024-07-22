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
  }

  #bookroom {
    cursor: pointer;
  }

  #comparison {
    cursor: pointer;
    color: #efd26a;
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
  background: #002951;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  margin-top: 110px;
  width: 1077px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #ebeaea;
  display: flex;
  flex-direction: row;

  #detail {
    margin-left: 33px;
    float: left;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 800px;
    border: none;
    background: transparent;
  }

  input:focus {
    outline: none;
    border: none;
  }

  input::placeholder {
    // color: #fff;
  }

  #search {
    margin-top: 30px;
    margin-left: auto;
    margin-right: 47px;
    width: 41.443px;
    height: 40.25px;
    flex-shrink: 0;
  }
`;

export const Ad = styled.div`
  margin-top: 89px;
  width: 1076px;
  height: 205px;
  flex-shrink: 0;
  background: #d9d9d9;
`;

export const Title = styled.div`
  margin-top: 43px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.45px;
`;

export const FunList = styled.div`
  margin-top: 60px;
  flex-direction: row;
  column-gap: 55px;
  row-gap: 55px;
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 230px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Fun1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  text-align: left;

  #img1 {
    width: 319px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 20px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }

  #name1 {
    width: 300px;
    margin-top: 11px;
    margin-right: auto;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 22px;
    margin-left: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #loc1 {
    width: 300px;
    margin-top: 10px;
    margin-right: auto;
    color: #999;
    margin-left: 10px;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Fun2 = styled.div`
  display: flex;
  flex-direction: column;

  #img2 {
    width: 319px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 20px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }

  #name2 {
    margin-top: 11px;
    margin-right: auto;
    color: #fff;
    font-family: "Pretendard Variable";
    margin-left: 10px;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #loc2 {
    margin-top: 10px;
    margin-right: auto;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    margin-left: 10px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Fun3 = styled.div`
  display: flex;
  flex-direction: column;

  #img3 {
    width: 319px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 20px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }

  #name3 {
    margin-top: 11px;
    margin-left: 10px;
    margin-right: auto;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #loc3 {
    margin-top: 10px;
    margin-right: auto;
    margin-left: 10px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 18px;
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
