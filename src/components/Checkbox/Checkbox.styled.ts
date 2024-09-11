import { styled } from "solid-styled-components";

export const CheckboxContainer = styled("label")`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const StyledCheckbox = styled("input")`
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #d1d5db;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: all 150ms;

  &:checked {
    background-color: #3b82f6;
    border-color: #3b82f6;
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:hover {
    border-color: #3b82f6;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }

  &:disabled {
    background-color: #e5e7eb;
    border-color: #d1d5db;
    cursor: not-allowed;
  }
`;

export const CheckboxLabel = styled("span")`
  margin-left: 8px;
`;
