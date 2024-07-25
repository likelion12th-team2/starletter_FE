import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/StyledPetModal";

const PetModal = ({ isOpen, onClose, pet }) => {
  if (!isOpen || !pet) {
    return null;
  }

  return (
    <P.ModalOverlay>
      <P.Close onClick={onClose}>
        <img
          id="img"
          src={`${process.env.PUBLIC_URL}/images/Close.svg`}
          alt="close"
        />
      </P.Close>
      <P.Content>
        <img id="img" src={pet.petImage} alt={pet.petName} />
        <div id="name">{pet.petName}</div>
        <div id="birth">
          {pet.petBirth} ~ {pet.petAnniv}
        </div>
        <P.Button>
          <button id="btn">삭제</button>
        </P.Button>
      </P.Content>
    </P.ModalOverlay>
  );
};

export default PetModal;
