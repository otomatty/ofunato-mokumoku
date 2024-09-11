import { styled } from 'solid-styled-components';

export const MemberPageWrapper = styled('div')`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  section {
    margin-bottom: 2rem;
  }

  h2 {
    color: #555;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
