import { styled } from 'solid-styled-components';

export const StyledSectionContainer = styled('section')`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 1rem 0;
  padding: 1rem 0;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    padding: 1rem;
  }
`;
