import { JSX } from "solid-js";
import { StyledInput } from "./Input.styled";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <StyledInput
      {...props}
      class={`${props.class || ""} ${props.error ? "error" : ""}`}
    />
  );
};

export default Input;
