import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #eee;
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
  width: 300px;
  height: 200px;
  overflow: hidden;
`;

export const Book = styled.div`
  position: absolute;
  transition: transform 0.5s ease, font-size 0.5s ease;
  opacity: 0;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 150px;
  ${({ large }) =>
    large &&
    `
    transform: translateX(0);
    font-size: 24px;
    opacity: 1;
    width: 200px;
    height: 300px;
  `}
  ${({ small, next }) =>
    small &&
    next &&
    `
    transform: translateX(100px);
    font-size: 16px;
    opacity: 1;
  `}
  ${({ small, prev }) =>
    small &&
    prev &&
    `
    transform: translateX(-100px);
    font-size: 16px;
    opacity: 1;
  `}
  ${({ hidden }) =>
    hidden &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`;

export const AddButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
`;
