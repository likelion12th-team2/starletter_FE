import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  width: 376px;
  height: 519px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #e8f2ff;
  z-index: 1000;
  position: fixed;
  pointer-events: auto;
  top: 100px;
  right: 80px;
`;

export const CloseButton = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;

  #close {
    margin-right: 20px;
    margin-top: 16px;
    width: 16.8px;
    height: 16.8px;
    flex-shrink: 0;
    margin-left: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Greet = styled.div`
  margin-top: 8px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Information = styled.div`
  cursor: pointer;
  width: 300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #002951;
  display: flex;
  margin-top: 28px;
  flex-direction: row;

  #information {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    margin-top: 13px;
    margin-left: 16px;
  }

  #detinf {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 18px;
    margin-left: 15px;
  }
`;

export const Pluspet = styled.div`
  cursor: pointer;
  width: 300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #002951;
  display: flex;
  flex-direction: row;

  #plus {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    margin-top: 13px;
    margin-left: 16px;
  }

  #detplus {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 18px;
    margin-left: 15px;
  }
`;

export const Managepet = styled.div`
  cursor: pointer;
  width: 300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #002951;
  display: flex;
  flex-direction: row;
  margin-top: 3px;

  #manage {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    margin-top: 13px;
    margin-left: 16px;
  }

  #detman {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 18px;
    margin-left: 15px;
  }
`;

export const Bookact = styled.div`
  cursor: pointer;
  width: 300px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #002951;
  display: flex;
  flex-direction: row;
  margin-top: 3px;

  #bookact {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    margin-top: 13px;
    margin-left: 16px;
  }

  #manact {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 18px;
    margin-left: 15px;
  }
`;
