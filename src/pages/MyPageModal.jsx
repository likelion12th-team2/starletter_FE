import React, { useEffect, useRef, useState } from "react";
import * as P from "../styles/StyledMyPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPageModal = ({ isOpen, onClose, anchorRef }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [name1, setName1] = useState("");

  const key = localStorage.getItem("token");

  useEffect(() => {
    const fetchName = async () => {
      if (!key) return; // key가 없으면 API 호출을 하지 않음
      try {
        const response = await axios.get(
          `http://13.209.13.101/accounts/myinfo/`,
          {
            headers: {
              Authorization: `Token ${key}`, // 필요한 경우 인증 헤더 추가
            },
          }
        );
        setName1(response.data.name);
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    fetchName();
  }, [key]);

  const goPlus = () => {
    navigate(`/mypage/pluspet`);
  };

  const goManage = () => {
    navigate(`/mypage/managepet`);
  };

  const goBook = () => {
    navigate(`/mypage/bookroom`);
  };

  const goEdit = () => {
    navigate(`/mypage/edit`);
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
      <P.Content ref={modalRef}>
        <P.ProfileImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/Myprofile.svg`}
            alt="Profile"
          />
        </P.ProfileImage>
        <P.Greet>{name1}님</P.Greet>
        <P.Button>
          <P.Information onClick={goEdit}>
            <img
              id="information"
              src={`${process.env.PUBLIC_URL}/images/Information.svg`}
              alt="정보수정"
            />
            <div id="detinf">내 프로필 수정</div>
          </P.Information>
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
