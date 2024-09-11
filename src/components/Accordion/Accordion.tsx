import { createSignal, For } from "solid-js";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "./Accordion.styled";

export interface AccordionItemProps {
  category: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

const Accordion = (props: AccordionProps) => {
  const [openItems, setOpenItems] = createSignal<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      if (props.allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <AccordionContainer>
      <For each={props.items}>
        {(item, index) => {
          const isOpen = () => openItems().includes(index());
          return (
            <AccordionItem>
              <AccordionHeader onClick={() => toggleItem(index())}>
                {item.title}
                <AccordionIcon isOpen={isOpen()}>▼</AccordionIcon>
              </AccordionHeader>
              <AccordionContent isOpen={isOpen()}>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        }}
      </For>
    </AccordionContainer>
  );
};

export default Accordion;
