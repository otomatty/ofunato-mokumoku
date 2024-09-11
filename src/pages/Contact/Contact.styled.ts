import { styled } from "solid-styled-components";

export const ContactWrapper = styled("div")`
  max-width: 600px;
  margin: 4rem auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled("div")`
  margin-bottom: 15px;
`;

export const Label = styled("label")`
  margin-bottom: 5px;
  font-weight: bold;

  .required {
    color: red;
    font-size: 12px;
    margin-left: 5px;
  }

  .optional {
    color: gray;
    font-size: 12px;
    margin-left: 5px;
  }
`;

export const Input = styled("input")`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const TextArea = styled("textarea")`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Select = styled("select")`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Button = styled("button")`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
