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
    color: #efd26a;
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
// body
export const WriteContainer = styled.div`
  background: var(--Color-1, #002951);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 125px;
`;

export const WriteWrap = styled.div`
  width: 1213px;
  height: 900px;
  flex-shrink: 0;
  margin-top: 86px;
`;
export const Write = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1213px;
  height: 849px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--gray-10, #ebeaea);

  #writebook {
    resize: none;
    width: 95%;
    height: 80%;
    margin-top: 43px;
    margin-bottom: 24px;
    border: none;
    background: var(--gray-10, #ebeaea);
    outline: none;

    color: #000;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    white-space: pre-wrap;
  }
  # writebook:: placeholder {
    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #line {
    width: 1168px;
    height: 1px;
    background: #999;
    margin-bottom: 24px;
  }
`;
export const AddImgWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 1144px;
  margin-bottom: 24px;
`;
export const AddImg = styled.button`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #d9d9d9;

  #addBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin-top: 20%;
  }

  #addimg {
    width: 52px;
    height: 39px;
    flex-shrink: 0;
  }
  #addImgText {
    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const AddedImg = styled.div`
  display: flex;
  gap: 20px;

  #addedImgs {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
    background-size: contain;
    object-fit: cover;
  }
`;

export const PublicPrivate = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 18px;
  margin-left: 28px;

  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  #label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  #public {
    width: 30px;
    height: 30px;
  }
  #private {
    width: 30px;
    height: 30px;
  }
`;
export const WriteButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  margin-top: 90px;
  margin-bottom: 16px;

  #writeWarning {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #writeBtn {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;

    width: 185px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 50px;
    background: var(--Color-2, #efd26a);
    box-shadow: 0px 0px 4px 5px rgba(239, 210, 106, 0.3);

    &:hover {
      box-shadow: 0px 0px 10px 5px rgba(260, 230, 120, 0.6);
    }
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
