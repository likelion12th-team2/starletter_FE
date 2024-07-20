import React, { useEffect, useRef } from "react";
import * as P from "../styles/StyledMyPage";
import { useNavigate, useParams } from "react-router-dom";

const MyPageModal = ({ isOpen, onClose, profile, anchorRef }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const goPlus = () => {
    navigate(`/mypage/pluspet`);
  };

  const goManage = () => {
    navigate(`/mypage/managepet`);
  };

  const goBook = () => {
    navigate(`/mypage/bookroom`);
  };

  useEffect(() => {
    if (isOpen && anchorRef.current && modalRef.current) {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const modal = modalRef.current;
      modal.style.top = `${anchorRect.bottom + window.scrollY}px`;
      modal.style.left = `${anchorRect.left}px`;
      modal.style.width = `${anchorRect.width}px`;
    }
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return (
    <P.ModalOverlay>
      <P.CloseButton onClick={onClose}>
        <img
          id="close"
          src={`${process.env.PUBLIC_URL}/images/CloseModal.svg`}
          alt="닫기"
        />
      </P.CloseButton>
      <P.Content>
        <P.ProfileImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/Myprofile.svg`}
            alt="Profile"
          />
        </P.ProfileImage>
        <P.Greet>안녕하세요, {profile.name}님</P.Greet>
        <P.Button>
          <P.Pluspet onClick={goPlus}>
            <img
              id="plus"
              src={`${process.env.PUBLIC_URL}/images/Pluspet.svg`}
              alt="펫추가"
            />
            <div id="detplus">반려동물 추가</div>
          </P.Pluspet>
          <P.Managepet onClick={goManage}>
            <img
              id="manage"
              src={`${process.env.PUBLIC_URL}/images/Mypet.svg`}
              alt="펫관리"
            />
            <div id="detman">나의 반려동물 관리</div>
          </P.Managepet>
          <P.Bookact onClick={goBook}>
            <img
              id="bookact"
              src={`${process.env.PUBLIC_URL}/images/Bookroom.svg`}
              alt="책방활동"
            />
            <div id="manact">책방 활동 관리</div>
          </P.Bookact>
        </P.Button>
      </P.Content>
    </P.ModalOverlay>
  );
};

export default MyPageModal;
