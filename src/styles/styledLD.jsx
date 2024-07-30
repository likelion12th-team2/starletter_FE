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
    color: #efd26a;
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
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

// body
export const Book = styled.div`
  margin-top: 40px;
  margin-bottom: 92px;
`;
export const PageTitle = styled.div`
  margin-bottom: 105px;

  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

export const Page = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 5px;
  background: #FFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-origin: center left;
  transform: ${({ disabled }) => (disabled ? "none" : "rotateY(0deg)")};
  transition: transform 0.6s, transform-origin 0.6s;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:first-of-type {
    transform-origin: center right;
    transform: ${({ disabled }) => (disabled ? "none" : "rotateY(0deg)")};
    
    );
  }
  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "rotateY(-10deg)")};
    &:first-of-type {
      transform: ${({ disabled }) => (disabled ? "none" : "rotateY(10deg)")};
    }
  }
`;

export const PageContent = styled.div`
  padding-top: 48px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 30px;
  box-sizing: border-box;

  #date {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 15px;
  }
  #public {
    width: 30px;
    height: 30px;
  }
  #content {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.375px;

    line-height: normal;
    text-align: left;
  }
  #images {
    display: flex;
    gap: 30px;
  }
  #img {
    object-fit: cover;
    width: 153px;
    height: 158px;
    flex-shrink: 0;
    border-radius: 20px;
    margin-bottom: 15px;
  }
`;

export const HeartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.84px;

  width: 132.087px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 35.507px;
  background: #fff;
  border: none;

  #heart {
    width: 25.565px;
    height: 25.565px;
  }
  #heartText {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 21.304px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 82px;
  #section {
    width: 1190px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Color-4, #37506e);
  }
`;

//포스트잇
export const PostitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 140px;
`;
export const PostitList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1190px;
  gap: 40px;
  }
`;

export const Postit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 206px;
  height: 225px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #c4def8;

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
  white-space: pre-wrap;

  #content {
    width: 170px;
    height: 190px;
    display: flex;
    align-items: left;

    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-align: left;
  }

  #postitPlus {
    width: 51.045px;
    height: 51.045px;
    flex-shrink: 0;
  }
`;
export const ModalContent = styled.div`
  flex-direction: column;
  align-items: center;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 20px;

  cursor: pointer;
  text-align: left;
  white-space: pre-wrap;

  #wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #addPostit {
    resize: none;
    width: 100%;
    height: 265px;
    border: none;
    outline: none;
    background: #c4def8;

    color: #000;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #addPostitBtn {
    width: 120px;
    height: 45px;
    border-radius: 21.429px;
    background: var(--Color-2, #efd26a);
    margin-top: 50px;

    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border: none;
    cursor: pointer;

    margin-left: 35%;
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
