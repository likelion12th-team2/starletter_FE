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
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  background: var(--Color-1, #002951);
`;
export const NewBook = styled.div`
  margin-top: 107px;
  display: flex;
  aline-item: center;
  justify-content: center;
  gap: 64px;
`;
export const BookCover = styled.div`
  width: 386px;
  height: 522px;
  flex-shrink: 0;
  flex-shrink: 0;
  border-radius: 13.353px;
  border: linear-gradient(1px, #85858580 50%, #79a3c680 50%);
  background: #87a8cf;

  position: relative;

  display: flex;
  flex-direction: column;
  align-item: center;
`;
export const BookCoverText = styled.div`
  #title {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    writing-mode: vertical-rl;

    background: #fff;
    padding-top: 13px;
    padding-right: 11px;
    padding-left: 42px;
    padding-bottom: 20px;

    position: absolute;
    top: 1px;
    left: 70%;
    border-radius: 0px 0px 9.28px 9.28px;
    box-shadow: 0px 7.424px 7.424px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const BookCoverImg = styled.div`
  width: 386px;
  height: 353px;
  flex-shrink: 0;
  position: relative;
  margin-top: 120px;

  #MycoverImg {
    width: 386px;
    height: 353px;
    flex-shrink: 0;
    object-fit: cover;
  }
`;
export const BookDetail = styled.div`
  width: 515px;
  height: 428px;
  flex-shrink: 0;
  flex-direction: column;
  display: flex;
  gap: 16px;

  #title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    margin-right: auto;
  }
  #writer {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    margin-right: auto;
  }
  #writtendate {
    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    margin-right: auto;
  }
  #ps {
    margin-top: 29px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 120% */
    letter-spacing: 0.5px;

    display: flex;

    white-space: pre-wrap;
    text-align: left;
  }
`;
export const MyBook = styled.div`
  margin-top: 224px;
`;

export const WriteNewPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;
  margin-bottom: 100px;

  #writeNewPage {
    width: 221px;
    height: 55px;
    flex-shrink: 0;
    cursor: pointer;

    border-radius: 50px;
    border: none;
    background: var(--Color-2, #efd26a);
    box-shadow: 0px 0px 4px 5px rgba(239, 210, 106, 0.3);

    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
      box-shadow: 0px 0px 10px 5px rgba(260, 230, 120, 0.6);
    }
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  #section {
    width: 1190px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--Color-4, #37506e);
  }
`;

export const PostitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 140px;
`;
export const PostitList = styled.div`
  display: flex;
  width: 1190px;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Postit = styled.div`
  width: 206px;
  height: 225px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #c4def8;
  padding: 18px;

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

    overflow: hidden; /* 넘치는 텍스트를 숨김 */
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

// 모달 댓글 보기
export const ModalContent = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 20px;
  white-space: pre-wrap;
`;

// 책 화면 구현
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: #002951;
  text-align: center;
  align-items: center;
  justify-content: center;
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

  #wrap {
    display: flex;
  }
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
    text-justify: inter-word;

    display: flex;
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.375px;

    line-height: normal;
    white-space: pre-wrap;
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
