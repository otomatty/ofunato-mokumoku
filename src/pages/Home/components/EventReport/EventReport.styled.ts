import { styled } from 'solid-styled-components';

export const EventReportWrapper = styled('div')`
  .event-report-section {
    background-color: var(--color-background-default);
  }

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .report-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .more-reports {
    text-align: center;
    margin-top: 2rem;

    a {
      color: var(--color-primary-main);
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ReportItem = styled('div')`
  background-color: var(--color-background-paper);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--color-text-accent);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--color-primary-main);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
