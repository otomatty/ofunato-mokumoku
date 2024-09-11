import { styled } from "solid-styled-components";

export const PaginationContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PageButton = styled("button")<{ active?: boolean }>`
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? "#007bff" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#f0f0f0")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageEllipsis = styled("span")`
  margin: 0 5px;
`;
