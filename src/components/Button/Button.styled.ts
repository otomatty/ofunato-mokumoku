import { styled } from 'solid-styled-components';

export const StyledButton = styled('button')<{ variant?: string }>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;

  background-color: ${(props) =>
    props.variant === 'secondary' ? '#6c757d' : '#007bff'};
  color: white;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'secondary' ? '#5a6268' : '#0056b3'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
