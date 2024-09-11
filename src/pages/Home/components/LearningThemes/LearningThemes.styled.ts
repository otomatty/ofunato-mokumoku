import { styled } from 'solid-styled-components';

export const LearningThemesWrapper = styled('div')`
  .learning-themes-section {
    background-color: var(--color-background-default);
  }
`;

export const ThemesGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.6rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ThemeCard = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  aspect-ratio: 1 / 1; /* 正方形にするための設定 */

  span {
    display: block;
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
  }
`;

export const LoadMoreButton = styled('button')`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: var(--color-primary-main);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
