import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPetModal";
import axios from "axios";

// 환경 변수나 다른 방법으로 백엔드 URL을 설정하는 부분입니다.
const BACKEND_URL = "http://127.0.0.1:8000" || "http://3.34.187.40";

const PetModal = ({ isOpen, onClose, pet }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate();
  if (!isOpen || !pet) {
    return null;
  }

  const key = localStorage.getItem("token");

  const handleDelete = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/accounts/pets/${pet.id}/`, {
        headers: {
          Authorization: `Token ${key}`,
        },
      });
      onClose();
      navigate("/mypage/managepet", { replace: true });
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <P.ModalOverlay>
      <P.Close onClick={onClose}>
        <img
          id="img"
          src={`${process.env.PUBLIC_URL}/static/images/Close.svg`}
          alt="close"
        />
      </P.Close>
      <P.Content>
        <img
          id="img"
          src={
            pet.petImage ||
            `${process.env.PUBLIC_URL}/static/images/default_pet_image.png`
          }
          alt={pet.petName}
        />
        <div id="name">{pet.petName}</div>
        <div id="birth">
          {pet.petBirth} ~ {pet.petAnniv}
        </div>
        <P.Button>
          <button id="btn" onClick={() => setIsConfirmOpen(true)}>
            삭제
          </button>
        </P.Button>
      </P.Content>

      {isConfirmOpen && (
        <P.ConfirmModal>
          <P.ModalContent>
            <P.Detail>
              <div id="really">정말 </div>
              <div id="delete">삭제</div>
              <div id="do">하시겠습니까?</div>
            </P.Detail>
            <P.ModalButton>
              <button id="yes" onClick={handleDelete}>
                예
              </button>
              <button id="no" onClick={() => setIsConfirmOpen(false)}>
                아니오
              </button>
            </P.ModalButton>
          </P.ModalContent>
        </P.ConfirmModal>
      )}
    </P.ModalOverlay>
  );
};

export default PetModal;
