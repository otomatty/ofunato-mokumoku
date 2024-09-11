import { createSignal, For, Show } from "solid-js";
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
} from "./Dropdown.styled";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [selectedOption, setSelectedOption] =
    createSignal<DropdownOption | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen());

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    props.onSelect(option.value);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption()?.label || props.placeholder || "選択してください"}
        <span>{isOpen() ? "▲" : "▼"}</span>
      </DropdownButton>
      <Show when={isOpen()}>
        <DropdownList>
          <For each={props.options}>
            {(option) => (
              <DropdownItem onClick={() => handleSelect(option)}>
                {option.label}
              </DropdownItem>
            )}
          </For>
        </DropdownList>
      </Show>
    </DropdownContainer>
  );
};

export default Dropdown;
