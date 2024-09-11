import { styled } from "solid-styled-components";

export const TabsContainer = styled("div")`
  width: 100%;
`;

export const TabList = styled("div")`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
`;

export const TabButton = styled("button")<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#ffffff" : "#f3f4f6")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.active ? "#3b82f6" : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  color: ${(props) => (props.active ? "#3b82f6" : "#4b5563")};

  &:hover {
    background-color: #e5e7eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

export const TabContent = styled("div")`
  padding: 20px;
`;
