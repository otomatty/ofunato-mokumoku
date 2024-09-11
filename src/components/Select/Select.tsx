import { For } from "solid-js";
import { SelectWrapper, StyledSelect, SelectArrow } from "./Select.styled";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Select = (props: SelectProps) => {
  return (
    <SelectWrapper>
      <StyledSelect
        value={props.value}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        disabled={props.disabled}
      >
        {props.placeholder && (
          <option value="" disabled selected hidden>
            {props.placeholder}
          </option>
        )}
        <For each={props.options}>
          {(option) => <option value={option.value}>{option.label}</option>}
        </For>
      </StyledSelect>
      <SelectArrow>▼</SelectArrow>
    </SelectWrapper>
  );
};

export default Select;
