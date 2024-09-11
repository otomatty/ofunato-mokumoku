import { styled } from "solid-styled-components";

export const CalendarSectionWrapper = styled("div")`
  margin-bottom: 2rem;
`;

export const CalendarHeader = styled("div")`
  text-align: center;
  margin-bottom: 1rem;
`;

export const CalendarGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
`;

export const CalendarCell = styled("div")`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  div {
    margin-bottom: 0.5rem;
  }
`;

// カレンダーのスタイルを追加
