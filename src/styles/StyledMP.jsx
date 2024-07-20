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
    color: #efd26a;
  }

  #logout {
    cursor: pointer;
  }
`;

// body
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #002951;

  #title {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.875px;
    margin-top: 40px;
  }
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

export const SlideButton = styled.button`
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
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 228px;
    background: url(<path-to-image>) lightgray -41.918px 0px / 155.718% 100% no-repeat;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  #name {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 32.679px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 11px;
  }
  #date {
    color: #ebeaea;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margi-top: 9px;
  }

  #bookbtn {
    width: 161px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #c4def8;
    margin-top: 24px;
    border: none;
    color: #292c33;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    ${({ small }) =>
      small &&
      `
        display: none;
      `}
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
    border-radius: 10.909px;
    border: 0.817px solid rgba(133, 133, 133, 0.50);
    background: #87A8CF;
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.25);

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
    #name{
      font-size: 14.276px;
    }
    #date{
      font-size: 11.897px;
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
    #name{
      font-size: 14.276px;
    }
    #date{
      font-size: 11.897px;
    }
    
  `}
  ${({ hidden }) =>
    hidden &&
    `
    opacity: 0;
    pointer-events: none;
  `}
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
