import { styled } from 'solid-styled-components';

export const HomePageWrapper = styled('div')`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const EventSectionWrapper = styled('div')`
  width: 100%;
  padding: 0;
  border-radius: 0.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;
