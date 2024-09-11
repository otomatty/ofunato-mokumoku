import { Component, JSX } from 'solid-js';
import { StyledSectionContainer } from './SectionContainer.styled';

interface SectionContainerProps {
  children: JSX.Element;
  id?: string;
  className?: string;
}

const SectionContainer: Component<SectionContainerProps> = (props) => {
  return (
    <StyledSectionContainer id={props.id} class={props.className}>
      {props.children}
    </StyledSectionContainer>
  );
};

export default SectionContainer;
