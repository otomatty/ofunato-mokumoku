import { styled } from 'solid-styled-components';

export const MainVisualWrapper = styled('div')`
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const MainVisualContent = styled('div')`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem; /* コンテンツ内に左右のパディングを追加 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export const MainVisualImage = styled('img')`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

export const MainVisualDescription = styled('div')`
  text-align: left;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);

  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const MainVisualTextContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    max-width: 50%;
  }
`;

export const MainVisualTitle = styled('h1')`
  font-size: 2rem;
  color: var(--color-text-accent);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ButtonWrapper = styled('div')`
  margin-top: 1rem;

  a {
    text-decoration: none;
  }
`;
