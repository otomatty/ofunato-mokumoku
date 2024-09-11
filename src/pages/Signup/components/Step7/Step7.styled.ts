import { styled } from "solid-styled-components";

export const FormGroup = styled("div")`
  margin-bottom: 1.5rem;
`;

export const Label = styled("label")`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const CardsContainer = styled("ul")`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled("li")`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: visible;
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &.selected {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4);
    background-color: #007bff;
    color: white;
  }
`;

export const TextArea = styled("textarea")`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-top: 1rem; /* 追加: 上部のマージンを追加 */
`;
