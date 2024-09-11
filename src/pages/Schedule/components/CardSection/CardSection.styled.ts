import { styled } from "solid-styled-components";

export const CardSectionWrapper = styled("div")`
  margin: 0 auto 2rem auto;
  padding: 2rem;

  ul {
    max-width: 1000px;
    list-style: none;
    padding: 2rem 0 1rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: opacity 0.3s ease-out;
    overflow: hidden;

    &.collapsed {
      opacity: 1;
    }

    &.expanded {
      opacity: 1;
    }
  }
`;

export const EventCard = styled("div")`
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: hidden;
  position: relative;
  transition: opacity 0.3s ease-out;

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

export const ShowMoreButton = styled("button")`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #007bff;
  background: none;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
