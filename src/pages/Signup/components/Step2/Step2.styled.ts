import { styled } from 'solid-styled-components';

export const FormGroup = styled('div')`
  margin-bottom: 1.5rem;
`;

export const Label = styled('label')`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled('input')`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const ErrorMessage = styled('p')`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
