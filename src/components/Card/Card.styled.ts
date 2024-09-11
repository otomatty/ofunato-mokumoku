import { styled } from "solid-styled-components";

export const CardWrapper = styled("div")`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardHeader = styled("div")`
  padding: 16px;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`;

export const CardTitle = styled("h3")`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

export const CardContent = styled("div")`
  padding: 16px;
`;

export const CardFooter = styled("div")`
  padding: 16px;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
`;
