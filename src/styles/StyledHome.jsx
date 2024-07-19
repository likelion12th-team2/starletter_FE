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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: right;
  gap: 60px;
  margin-top: 20px;

  #bar {
    color: #fff;
  }
`;

export const MovingContent = styled.div`
  margin-left: 1000px;
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
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Detail = styled.div`
  height: 450px;
  width: 100%;
  background: white;

  #detail {
    margin-top: 120px;
    color: black;
    text-align: left;
    font-family: "Pretendard Variable";
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 70px;
    letter-spacing: 1.5px;
    margin-left: 280px;
  }

  #detail2 {
    margin-top: 20px;
    color: black;
    text-align: left;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    line-height: 30px;
    letter-spacing: 1px;
    margin-left: 280px;
  }
`;

export const Library = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const LibBtn = styled.div`
  margin-top: 112px;
  width: 200px;
  height: 65.882px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #efd26a;

  &:hover {
    box-shadow: 0px 0px 4px 5px rgba(239, 210, 106, 0.3);
  }

  #detail {
    margin-top: 20px;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Bookroom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const BookBtn = styled.div`
  margin-top: 112px;
  width: 200px;
  height: 65.882px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #efd26a;

  &:hover {
    box-shadow: 0px 0px 4px 5px rgba(239, 210, 106, 0.3);
  }

  #detail {
    margin-top: 20px;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Funeral = styled.div`
  margin-top: 320px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;

  #detail {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.45px;
  }
`;

export const FuCont = styled.div`
  gap: 60px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  // text-align: center;
  // align-items: center;
`;

export const Fu1 = styled.div`
  display: flex;
  flex-direction: column;

  #pic {
    width: 319px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-left: 10px;
    margin-top: 11px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #adress {
    float: left;
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Fu2 = styled.div`
  display: flex;
  flex-direction: column;

  #pic {
    width: 319px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    margin-left: 10px;
    text-align: left;
    margin-top: 11px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #adress {
    float: left;
    margin-left: 10px;
    text-align: left;
    margin-top: 10px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Fu3 = styled.div`
  display: flex;
  flex-direction: column;

  #pic {
    width: 319px;
    height: 305px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    margin-left: 10px;
    margin-top: 11px;
    text-align: left;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #adress {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Search = styled.div`
  width: 1077px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  background: #ebeaea;
  margin-top: 150px;

  #search {
    margin-top: 30px;
    margin-left: 40px;
    width: 41.443px;
    height: 40.25px;
    flex-shrink: 0;
  }

  #text {
    border: none;
    background: transparent;
    width: 800px;
    margin-left: 40px;
    margin-top: 0px;
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #text:focus {
    outline: none;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 340px;
  margin-bottom: 280px;
  text-align: center;
  align-items: center;

  #detail {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.45px;
  }
`;

export const ProCont1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 73px;
  margin-top: 60px;
`;

export const Pro1 = styled.div`
  height: 400px;
  width: 310px;
  display: flex;
  flex-direction: column;

  #pic {
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-top: 12px;
    margin-left: 10px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Cost1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  text-align: left;
  margin-left: 10px;
  margin-top: 9px;

  #sale {
    color: #ff6161;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #price {
    color: #c2c1c1;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Price1 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  float: left;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Pro2 = styled.div`
  height: 400px;
  width: 310px;
  display: flex;
  flex-direction: column;

  #pic {
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-top: 12px;
    margin-left: 10px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Cost2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  text-align: left;
  margin-left: 10px;
  margin-top: 9px;

  #sale {
    color: #ff6161;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #price {
    color: #c2c1c1;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Price2 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  float: left;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Pro3 = styled.div`
  height: 400px;
  width: 310px;
  display: flex;
  flex-direction: column;

  #pic {
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-top: 12px;
    margin-left: 10px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Cost3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  text-align: left;
  margin-left: 10px;
  margin-top: 9px;

  #sale {
    color: #ff6161;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #price {
    color: #c2c1c1;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Price3 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  float: left;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ProCont2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 73px;
  margin-top: 63px;
`;

export const Pro4 = styled.div`
  height: 400px;
  width: 310px;
  display: flex;
  flex-direction: column;

  #pic {
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-top: 12px;
    margin-left: 10px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Cost4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  text-align: left;
  margin-left: 10px;
  margin-top: 9px;

  #sale {
    color: #ff6161;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #price {
    color: #c2c1c1;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Price4 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  float: left;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Pro5 = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  width: 310px;

  #pic {
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-top: 12px;
    margin-left: 10px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Price5 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  float: left;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Cost5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  text-align: left;
  margin-left: 10px;
  margin-top: 9px;

  #sale {
    color: #ff6161;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #price {
    color: #c2c1c1;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Pro6 = styled.div`
  height: 400px;
  flex-direction: column;
  display: flex;
  width: 310px;

  #pic {
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    border-radius: 20px;
  }

  #title {
    float: left;
    text-align: left;
    margin-top: 12px;
    margin-left: 10px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;

export const Cost6 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  text-align: left;
  margin-left: 10px;
  margin-top: 9px;

  #sale {
    color: #ff6161;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #price {
    color: #c2c1c1;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Price6 = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  float: left;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
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
