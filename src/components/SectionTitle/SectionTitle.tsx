import { Component } from "solid-js";
import { TitleWrapper } from "./SectionTitle.styled";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: Component<SectionTitleProps> = (props) => {
  return (
    <TitleWrapper>
      <h2>{props.title}</h2>
    </TitleWrapper>
  );
};

export default SectionTitle;
