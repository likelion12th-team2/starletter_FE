import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 812px;
  height: 460px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
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
  margin-top: 15px;
  flex-direction: row;
  display: flex;
  gap: 31px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 292px;
  height: 379px;
  flex-shrink: 0;
  border-radius: 20px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;

  #img {
    width: 292px;
    height: 379px;
    flex-shrink: 0;
    border-radius: 20px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  text-align: left;
  //   margin-top: 68px;

  #title {
    width: 350px;
    color: #000;
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 137.143% */
  }

  #location {
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 8px;
  }

  #number {
    color: #999;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.625px;
    margin-top: 10px;
  }

  #go {
    color: #618bbf;
    font-family: "Pretendard Variable";
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    margin-top: 23px;
    line-height: normal;
  }
`;

export const Tag = styled.div`
  margin-top: 115px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  float: left;
  margin-right: auto;
  text-align: center;
`;

export const TagDet = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 101.182px;
  height: 48.182px;
  flex-shrink: 0;
  border-radius: 33.878px;
  background: #efd26a;

  #det1 {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 21.682px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
  }
`;
