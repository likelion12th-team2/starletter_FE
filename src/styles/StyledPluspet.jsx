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
  background: #002951;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
  letter-spacing: -0.875px;
`;

export const ProImg = styled.div`
  margin-top: 63px;
  width: 183px;
  height: 183px;
  flex-shrink: 0;
  display: flex;

  #edit {
    position: absolute;
    margin-top: 139px;
    margin-left: 139px;
  }
`;

export const Profile = styled.div`
  margin-top: 63px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  display: flex;
  gap: 49px;
  flex-direction: row;

  #name {
    margin-top: 17px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const NameBox = styled.div`
  width: 420.566px;
  height: 69.048px;
  flex-shrink: 0;
  border-radius: 5.724px;
  background: #79a3c6;
  box-shadow: 4.185px 4.185px 4.185px 0px rgba(0, 0, 0, 0.1);
  text-align: left;

  #namebox {
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    width: 380px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    background: transparent;
    color: #fff;
  }

  input:focus {
    outline: none;
    border: none;
  }

  input::placeholder {
    color: #fff;
  }
`;

export const Birth = styled.div`
  display: flex;
  gap: 49px;
  flex-direction: row;

  #birthday {
    margin-top: 17px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const BirthBox = styled.div`
  width: 420.566px;
  height: 69.048px;
  flex-shrink: 0;
  border-radius: 5.724px;
  background: #79a3c6;
  box-shadow: 4.185px 4.185px 4.185px 0px rgba(0, 0, 0, 0.1);

  #birthbox {
    color: rgba(255, 255, 255, 0.8);
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    margin-left: 20px;
    width: 200px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    background: transparent;
  }

  #birthcal {
    margin-top: 18px;
    float: right;
    margin-right: 24px;
  }

  input:focus {
    outline: none;
    border: none;
  }

  input::placeholder {
    color: #fff;
  }
`;

export const DatePickerWrapper = styled.div`
  margin-left: 250px;
  margin-top: 30px;
  z-index: 1000; /* 필요에 따라 조정 */
`;

export const Memorial = styled.div`
  display: flex;
  gap: 49px;
  flex-direction: row;

  #memorial {
    color: #fff;
    margin-top: 17px;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const MemorialBox = styled.div`
  width: 420.566px;
  height: 69.048px;
  flex-shrink: 0;
  border-radius: 5.724px;
  background: #79a3c6;
  box-shadow: 4.185px 4.185px 4.185px 0px rgba(0, 0, 0, 0.1);

  #memorialbox {
    color: rgba(255, 255, 255, 0.8);
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: left;
    width: 200px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    background: transparent;
    margin-left: 20px;
  }

  #memcal {
    margin-top: 18px;
    float: right;
    margin-right: 24px;
  }

  #memorialbox:focus {
    outline: none;
    border: none;
  }

  input::placeholder {
    color: #fff;
  }
`;

export const DatePickerWrapper1 = styled.div`
  margin-left: 250px;
  margin-top: 30px;
  z-index: 1000; /* 필요에 따라 조정 */
`;

export const Button = styled.div`
  margin-top: 95px;
  width: 167.143px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 39.857px;
  margin-bottom: 65px;
  background: #efd26a;
  cursor: pointer;

  #btn {
    cursor: pointer;
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
