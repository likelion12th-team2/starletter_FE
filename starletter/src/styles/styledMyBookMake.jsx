import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled.div`
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
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
  margin-left: 439px;
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

  #login {
    cursor: pointer;
  }

  #join {
    cursor: pointer;
  }
`;

// body
export const bodyContainer = styled.div`
  background: #002951;
`;

//책 슬라이드
export const Slider = styled.div`
  display: flex;
  align-items: center;
  gap: 55px;
  justify-content: center;
  position: relative;
  padding-top: 199px;
  padding-bottom: 88px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #002951;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1087px;
  height: 530px;
  overflow: hidden;
`;

export const Book = styled.div`
  position: absolute;
  transition: transform 0.5s ease, font-size 0.5s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #img {
    width: 228px;
    height: 228px;
    flex-shrink: 0;
    border-radius: 228px;
    background: url(<path-to-image>) lightgray -41.918px 0px / 155.718% 100% no-repeat;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  #title {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 21.6px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #author {
    color: var(--gray-10, #ebeaea);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 45px;
  }

  ${({ large }) =>
    large &&
    `
    transform: translateX(0);
    font-size: 24px;
    opacity: 1;
    width: 373px;
    height: 522px;
    flex-shrink: 0;
    border-radius: 13.353px;
    border: 1px solid rgba(133, 133, 133, 0.5);
    background: #87a8cf;

  `}
  ${({ small, next }) =>
    small &&
    next &&
    `
    transform: translateX(400px);
    width: 246.523px;
  height: 345px;
  flex-shrink: 0;
  border-radius: 8.825px;
  border: 0.661px solid rgba(133, 133, 133, 0.50);
  background: #87A8CF;

    font-size: 16px;
    opacity: 0.7;

    #img{
      width: 150.69px;
      height: 150.69px;
    }
    #title{
      font-size: 14.276px;
    }
    #author{
      font-size: 11.897px;
    }
    #addbtn{
      width: 51.045px;
      height: 51.045px;
    }
  `}
  ${({ small, prev }) =>
    small &&
    prev &&
    `
    transform: translateX(-400px);
    width: 246.523px;
  height: 345px;
  flex-shrink: 0;
  border-radius: 8.825px;
  border: 0.661px solid rgba(133, 133, 133, 0.50);
  background: #87A8CF;

    font-size: 16px;
    opacity: 0.7;

    #img{
      width: 150.69px;
      height: 150.69px;
    }
    #title{
      font-size: 14.276px;
    }
    #author{
      font-size: 11.897px;
    }
    #addbtn{
      width: 51.045px;
      height: 51.045px;
    }
    
  `}
  ${({ hidden }) =>
    hidden &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`;

export const AddBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 77px;
  height: 77px;
  cursor: pointer;
  background: #87a8cf;
  #addbtn {
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.div`
  #backbtn {
    margin-left: 846px;
    background: #fff;
    border: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 62px;

  #line {
    width: 337.005px;
    height: 1px;
    background: #999;
    margin-top: 6px;
  }
`;
export const Sample = styled.div`
  width: 304.745px;
  height: 403.078px;
  flex-shrink: 0;
  border-radius: 11.829px;
  border: 0.886px solid rgba(133, 133, 133, 0.5);
  background: #87a8cf;

  #SampleTitle {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 17.718px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-top: 36px;
    margin-bottom: 30px;
  }
  #SampleImg {
    width: 304.745px;
    height: 154.487px;
    flex-shrink: 0;
    border-right: 0.886px solid var(--gray-0, #999);
    border-left: 0.886px solid var(--gray-0, #999);
    background: #e7f3ff;
  }
`;
export const Cover = styled.div``;
export const CoverText = styled.div`
  color: var(--gray-0, #999);
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 22.47px;
  margin-bottom: 5px;
`;
export const CoverImg = styled.div`
  #addCover {
    width: 338px;
    height: 79px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px dashed #000;
    background: #fff;
  }

  #addimg {
    width: 40px;
    height: 30px;
    flex-shrink: 0;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ModalTitle = styled.div`
  display: flex;
  gap: 8px;

  #titleText {
    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #NewTitle {
    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border:none;

    &::placeholder {
      color: var(--gray-30, #C2C1C1);
      font-family: "Pretendard Variable";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
  }
`;

export const DescriptionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 55px;
  #desTitle {
    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #textlength {
    color: var(--gray-30, #c2c1c1);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const DescriptionText = styled.div`
  #NewDescription {
    resize: none;
    border-radius: 10px;
    border: 1px solid #000;
    width: 338px;
    height: 132px;

    color: var(--gray-0, #999);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Create = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
  margin-bottom: 32px;
  #create {
    width: 157px;
    height: 68px;
    flex-shrink: 0;
    border-radius: 48.387px;
    background: var(--Color-2, #efd26a);
    border: none;

    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 24.194px;
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
