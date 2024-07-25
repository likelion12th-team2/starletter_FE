import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 304.731px;
  height: 426.459px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10.909px;
  border: 0.817px solid rgba(133, 133, 133, 0.5);
  background: #87a8cf;
  box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.25);
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: auto;
`;

export const Close = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 30px; /* 상단에서 30px */
  right: 30px; /* 오른쪽에서 30px */

  #img {
    border: none;
    background: transparent;
  }
`;

export const Content = styled.div`
  margin-top: 25px;
  flex-direction: column;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  #img {
    width: 186.27px;
    height: 186.27px;
    flex-shrink: 0;
    border-radius: 186.27px;
    background: url(<path-to-image>) lightgray -34.246px 0px / 155.718% 100% no-repeat;
    box-shadow: 1.634px 3.268px 3.268px 0px rgba(0, 0, 0, 0.25);
  }

  #name {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 32.679px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
  }

  #birth {
    margin-top: 12px;
    color: #ebeaea;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
  }
`;

export const Button = styled.div`
  display: flex;
  width: 100px;
  height: 47px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #c4def8;
  margin-top: 10px;

  #btn {
    color: #767676;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    background: transparent;
  }
`;

export const ConfirmModal = styled.div`
  width: 332px;
  height: 233px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #002951;
  background: #e8f2ff;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: auto;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 75px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;

  #really {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #delete {
    color: #ff2020;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #do {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 37px;
  gap: 50px;

  #yes {
    display: flex;
    width: 90px;
    height: 47px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #b2d9ff;
    border: none;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #no {
    display: flex;
    width: 90px;
    height: 47px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    border: none;
    background: #b2d9ff;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
