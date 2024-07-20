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
    color: #efd26a;
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

export const ProList = styled.div`
  margin-top: 91px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 73px;
  row-gap: 60px;
  margin-bottom: 128px;
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
