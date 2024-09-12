import { styled } from "solid-styled-components";

export const ThankYouWrapper = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const ThankYouTitle = styled("h1")`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ThankYouMessage = styled("p")`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled("div")`
  margin-top: 2rem;
`;

export const Button = styled("a")`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
