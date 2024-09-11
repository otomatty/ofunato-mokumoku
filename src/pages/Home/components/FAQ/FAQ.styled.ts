import { styled } from 'solid-styled-components';

export const FAQWrapper = styled('div')`
  .faq-section {
    background-color: var(--color-background-default);
  }

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  dl {
    dt {
      color: var(--color-primary-main);
      font-weight: bold;
      margin-top: 1rem;
    }

    dd {
      color: var(--color-text-primary);
      margin-left: 0;
      margin-bottom: 1rem;
      padding-left: 1rem;
      border-left: 2px solid var(--color-primary-main);
    }
  }

  p {
    margin-top: 1rem;
  }

  a {
    color: var(--color-primary-main);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FAQInner = styled('div')`
  background-color: var(--color-background-paper);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
