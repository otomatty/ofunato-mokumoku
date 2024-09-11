import { styled } from 'solid-styled-components';

export const FullScreenNavWrapper = styled('div')<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

export const NavContent = styled('nav')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  a {
    color: #333;
    font-size: 24px;
    text-decoration: none;
    margin: 10px 0;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

export const CloseButton = styled('button')`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 200px;
`;
