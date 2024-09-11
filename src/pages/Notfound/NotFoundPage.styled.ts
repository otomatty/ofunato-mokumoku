import { styled } from 'solid-styled-components';

export const NotFoundPageWrapper = styled('div')`
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;

  h1 {
    color: #333;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
