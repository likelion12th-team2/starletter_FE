import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as FM from "../styles/StyledFM";

const FuneralModal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  return (
    <FM.ModalOverlay>
      <FM.Close onClick={handleClose}>
        <img
          id="img"
          src={`${process.env.PUBLIC_URL}/images/Close.svg`}
          alt="close"
        />
      </FM.Close>
      <FM.Content>
        <FM.Image>
          <img id="img" src="" alt="" />
        </FM.Image>
        <FM.Detail>
          <div id="title">펫포레스트 경기 광주점</div>
          <div id="location">경기도 광주시 오포안로 77</div>
          <div id="number">TEL. 1577-0996</div>
          <div id="go">홈페이지 바로가기</div>
          <FM.Tag>
            <FM.TagDet>
              <div id="det1">장례</div>
            </FM.TagDet>
          </FM.Tag>
        </FM.Detail>
      </FM.Content>
    </FM.ModalOverlay>
  );
};

export default FuneralModal;
