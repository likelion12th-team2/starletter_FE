import React from "react";

import * as FM from "../styles/StyledFM";

const FuneralModal = ({ show, handleClose, funeral }) => {
  if (!show || !funeral) {
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
          <img id="img" src={funeral.image} alt={funeral.name} />
        </FM.Image>
        <FM.Detail>
          <div id="title">{funeral.name}</div>
          <div id="location">{funeral.location}</div>
          {funeral.contact && <div id="number">{funeral.contact}</div>}
          {funeral.link && (
            <div id="go">
              <a href={funeral.link} target="_blank" rel="noopener noreferrer">
                홈페이지 바로가기
              </a>
            </div>
          )}
          <FM.Tag>
            {Array.isArray(funeral.tag) &&
              funeral.tag.map((tag, index) => (
                <FM.TagDet key={index}>
                  <div id="det1">{tag}</div>
                </FM.TagDet>
              ))}
          </FM.Tag>
        </FM.Detail>
      </FM.Content>
    </FM.ModalOverlay>
  );
};

export default FuneralModal;
