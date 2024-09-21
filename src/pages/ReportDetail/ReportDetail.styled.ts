import { styled } from "solid-styled-components";

export const ReportDetailWrapper = styled("div")`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

export const ReportDetailInner = styled("div")`
  max-width: 800px;
  margin: 0 auto;
`;
