import { styled } from "solid-styled-components";

export const EventReportWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    color: #333;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const ReportItem = styled("div")`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  h2 {
    color: #555;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;
