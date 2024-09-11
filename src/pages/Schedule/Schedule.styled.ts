import { styled } from 'solid-styled-components';

export const ScheduleWrapper = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;
`;

export const SectionTitle = styled('h2')`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Tabs = styled('div')`
  display: flex;
  margin: 0 auto;
`;

export const Tab = styled('button')`
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  color: #007bff;

  transition: border-bottom 0.3s;

  &.active {
    border-bottom: 2px solid #007bff;
    font-weight: bold;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;
