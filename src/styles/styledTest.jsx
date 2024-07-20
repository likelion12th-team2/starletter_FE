import styled from "styled-components";

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

export const Page = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 5px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-origin: center left;
  transform: ${({ disabled }) => (disabled ? "none" : "rotateY(deg)")};
  transition: transform 0.6s, transform-origin 0.6s;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:first-of-type {
    transform-origin: center right;
    transform: ${({ disabled }) => (disabled ? "none" : "rotateY(deg)")};
  }
  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "rotateY(-10deg)")};
    &:first-of-type {
      transform: ${({ disabled }) => (disabled ? "none" : "rotateY(10deg)")};
    }
  }
`;

export const PageContent = styled.div`
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;
