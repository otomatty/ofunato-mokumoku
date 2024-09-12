import { Component, JSX } from 'solid-js';
import { StyledButton } from './Button.styled';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: JSX.Element;
}

const Button: Component<ButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant={props.variant}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
