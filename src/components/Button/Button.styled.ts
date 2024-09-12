import { styled } from 'solid-styled-components';

export const StyledButton = styled('button')<{ variant?: string }>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s, color 0.3s;

  ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: #6c757d;
          color: white;
          border: none;
          &:hover {
            background-color: #5a6268;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #007bff;
          border: 2px solid #007bff;
          &:hover {
            background-color: rgba(0, 123, 255, 0.1);
          }
        `;
      default:
        return `
          background-color: #007bff;
          color: white;
          border: none;
          &:hover {
            background-color: #0056b3;
          }
        `;
    }
  }}

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    border-color: #cccccc;
    cursor: not-allowed;
  }
`;
