import { styled } from 'solid-styled-components';

export const FlowWrapper = styled('div')`
  .flow-section {
    background-color: var(--color-background-paper);
  }
`;

export const FlowList = styled('ol')`
  width: 100%;
  max-width: 600px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const FlowCard = styled('li')`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const CardTitle = styled('h3')`
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-primary-main);
`;

export const CardContent = styled('p')`
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-primary);
`;

export const CardNumber = styled('div')`
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast-text);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
`;
