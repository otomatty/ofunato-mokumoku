import { styled } from 'solid-styled-components';

export const EventTimeWrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const EventList = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  > p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  .days-container {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 1rem;
    height: 50%;
    padding-bottom: 1rem;
    border-bottom: 2px solid #eee;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      gap: 1rem;
    }
  }
`;

export const DayWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

export const DayStyled = styled('div')`
  padding: 1rem 0.2rem;
  box-sizing: border-box;
  height: 70%;
  width: 100%;
  background-color: var(--color-background-default);
  border-radius: 8px;
  text-align: center;
  align-content: center;

  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const HighlightedDayStyled = styled('div')`
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast-text);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const EventTitleStyled = styled('h3')`
  margin: 0;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const EventTimeStyled = styled('p')`
  margin: 0;
  font-size: 0.8rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
