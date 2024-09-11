import { styled, keyframes } from "solid-styled-components";

// スライドインアニメーションの定義
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

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
  overflow: visible; /* 変更: 擬似要素がはみ出して表示されるように */
  position: relative;
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out,
    box-shadow 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &.selected {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4); /* 色を変更 */
    &::before {
      content: "この日に参加する";
      position: absolute;
      top: 10px; /* カードからはみ出して表示 */
      left: -10px; /* カードからはみ出して表示 */
      background-color: #007bff;
      color: white;
      padding: 0.3rem 0.6rem;
      border-radius: 0 4px 4px 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

      font-size: 1.2rem;
      font-weight: bold;
      animation: ${slideIn} 0.3s ease-out; /* スライドインアニメーション */
    }
  }

  &.last-visible {
    max-height: 150px; /* 追加: 高さを制限 */
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
    }
  }
`;

export const EventDateTime = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 0.5rem;
  padding: 0.4rem;
`;

export const EventDateWrapper = styled("div")`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const EventDate = styled("p")`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const EventDay = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

export const EventYear = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #999;
`;

export const EventImage = styled("img")`
  width: 150px;
  height: auto;
  border-radius: 8px;
`;

export const EventDetails = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  gap: 0.5rem;
  text-align: left;
`;

export const EventTitle = styled("h3")`
  margin: 0;
  font-size: 1.6rem;
  color: var(--color-primary-main);
`;

export const EventTime = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const EventLocation = styled("p")`
  margin: 0;
  font-size: 1rem;
  color: #333;
  font-weight: bold; /* 追加: 太字にする */
  &::before {
    content: "場所 "; /* 追加: 場所の前に「場所:」を表示 */
    color: #555; /* 追加: 色を青にする */
    background-color: #eee;
    padding: 0.2rem 0.4rem;
    margin-right: 0.4rem;
  }
`;
