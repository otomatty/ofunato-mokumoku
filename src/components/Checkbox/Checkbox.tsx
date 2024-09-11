import { JSX } from "solid-js";
import {
  CheckboxContainer,
  StyledCheckbox,
  CheckboxLabel,
} from "./Checkbox.styled";

interface CheckboxProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox type="checkbox" {...props} />
      {props.label && <CheckboxLabel>{props.label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

export default Checkbox;
