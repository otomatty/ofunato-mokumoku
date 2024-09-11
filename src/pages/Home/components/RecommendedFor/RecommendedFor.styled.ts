import { styled } from 'solid-styled-components';

export const RecommendedForWrapper = styled('div')`
  .recommended-for-section {
    background-color: var(--color-background-default);
  }
`;

export const RecommendationList = styled('ul')`
  list-style-type: none;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  li {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    &::before {
      content: '✅';
      margin-right: 8px;
      color: #4caf50;
      font-family: 'Noto Color Emoji', sans-serif;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    li {
      font-size: 1rem;
    }
  }
`;
