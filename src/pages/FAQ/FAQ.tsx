import { Component } from "solid-js";
import { Container, Title } from "./FAQ.styled";
import Accordion from "../../components/Accordion/Accordion";
import { faqItems } from "../../data/faqData";

const FAQ: Component = () => {
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <Container>
      <Title>よくある質問</Title>
      {categories.map((category) => (
        <div>
          <h2>{category}</h2>
          <Accordion
            items={faqItems.filter((item) => item.category === category)}
          />
        </div>
      ))}
    </Container>
  );
};

export default FAQ;
