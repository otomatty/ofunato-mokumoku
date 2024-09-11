import { styled } from "solid-styled-components";

export const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled("div")`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

export const ModalHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const ModalTitle = styled("h2")`
  margin: 0;
  font-size: 1.5rem;
`;

export const CloseButton = styled("button")`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  color: #666;

  &:hover {
    color: #000;
  }
`;

export const ModalContent = styled("div")`
  margin-bottom: 15px;
`;

export const ModalFooter = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
