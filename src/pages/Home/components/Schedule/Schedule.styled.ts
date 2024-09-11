import { styled } from 'solid-styled-components';

export const ScheduleWrapper = styled('div')`
  .schedule-section {
    background-color: var(--color-background-default);
  }

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;

  p {
    color: var(--color-text-primary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .event-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  a {
    color: var(--color-primary-main);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    max-width: 800px;

    .event-list {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

export const EventCard = styled('div')`
  background-color: var(--color-background-paper);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  h3 {
    color: var(--color-text-accent);
    font-size: 1.2rem;
    margin: 0.5rem 1rem;
  }

  p {
    color: var(--color-text-primary);
    margin: 0.5rem 1rem;
  }
`;
