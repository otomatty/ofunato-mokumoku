import { styled } from "solid-styled-components";

export const HeaderWrapper = styled("header")`
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const HeaderInner = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled("div")`
  color: #333;
  margin: 0;

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #007bff;
      transform: scale(1.05);
    }
  }

  img {
    display: block;
    max-height: 60px;
    width: auto;
  }

  span {
    display: block;
    font-size: var(--font-size-base);
    color: var(--color-primary-main);
    margin-left: 0.4rem;

    @media (min-width: 576px) {
      font-size: 1.4rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }
`;

export const Nav = styled("nav")`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // モバイル表示では常に非表示
  }

  a {
    color: #333;
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

export const ButtonContainer = styled("div")`
  display: flex;
  gap: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const HamburgerButton = styled("button")`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 2rem;
    height: 4px;
    background-color: #888;
    margin: 5px 0;
    transition: 0.4s;
  }
`;
