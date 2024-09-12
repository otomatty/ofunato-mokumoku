import { styled } from "solid-styled-components";

export const ConfirmationWrapper = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ConfirmationTitle = styled("h2")`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ConfirmationMessage = styled("p")`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ConfirmationList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const ConfirmationItem = styled("li")`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemLabel = styled("span")`
  font-weight: bold;
  color: #333;
`;

export const ItemValue = styled("span")`
  color: #666;
`;

export const ButtonGroup = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Button = styled("button")<{ variant?: "primary" | "secondary" }>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  ${(props) =>
    props.variant === "secondary"
      ? `
    background-color: #f0f0f0;
    color: #333;

    &:hover {
      background-color: #e0e0e0;
    }
  `
      : `
    background-color: #007bff;
    color: #fff;

    &:hover {
      background-color: #0056b3;
    }
  `}

  &:hover {
    transform: translateY(-2px);
  }
`;
