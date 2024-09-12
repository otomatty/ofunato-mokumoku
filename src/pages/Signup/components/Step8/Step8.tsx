import { createSignal, createEffect, For } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import {
  FormGroup,
  Label,
  Card,
  CardsContainer,
  TextArea,
  AccordionHeader,
  AccordionContent,
  AccordionInner,
  IconWrapper,
} from "./Step8.styled";
import { OptionalTag } from "../../Signup.styled";
import { themeData } from "../../../../data/themeData";
import { FaSolidChevronDown } from "solid-icons/fa";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step8 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [selectedThemes, setSelectedThemes] = createSignal<string[]>(
    formData.theme.split(",").filter(Boolean)
  );
  const [otherTheme, setOtherTheme] = createSignal(formData.otherPurpose || "");
  const [openCategories, setOpenCategories] = createSignal<string[]>([]);

  const handleThemeChange = (value: string) => {
    const currentThemes = selectedThemes();
    if (currentThemes.includes(value)) {
      setSelectedThemes(currentThemes.filter((theme) => theme !== value));
    } else {
      setSelectedThemes([...currentThemes, value]);
    }
    updateFormData();
  };

  const handleOtherThemeChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setOtherTheme(target.value);
    updateFormData();
  };

  const updateFormData = () => {
    setFormData({
      ...formData,
      theme: selectedThemes().join(","),
      otherPurpose: otherTheme(),
    });
  };

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  createEffect(() => {
    setIsStepValid(true); // 常に有効（任意項目）
  });

  return (
    <FormGroup>
      <Label for="theme">
        興味があるテーマを選んでください<OptionalTag>任意</OptionalTag>
      </Label>
      <For each={themeData}>
        {(category) => (
          <>
            <AccordionHeader onClick={() => toggleCategory(category.category)}>
              {category.category}
              <IconWrapper
                style={{
                  transform: openCategories().includes(category.category)
                    ? "rotate(180deg)"
                    : "rotate(0)",
                }}
              >
                <FaSolidChevronDown />
              </IconWrapper>
            </AccordionHeader>
            <AccordionContent
              open={openCategories().includes(category.category)}
            >
              <AccordionInner>
                <CardsContainer>
                  <For each={category.themes}>
                    {(item) => (
                      <Card
                        class={
                          selectedThemes().includes(item.title)
                            ? "selected"
                            : ""
                        }
                        onClick={() => handleThemeChange(item.title)}
                      >
                        {item.emoji} {item.title}
                      </Card>
                    )}
                  </For>
                </CardsContainer>
              </AccordionInner>
            </AccordionContent>
          </>
        )}
      </For>
      <Label for="otherTheme">
        他に取り組みたいテーマがあれば入力してください
        <OptionalTag>任意</OptionalTag>
      </Label>
      <TextArea
        id="otherTheme"
        name="otherTheme"
        rows="3"
        placeholder="取り組みたいテーマを入力してください"
        value={otherTheme()}
        onInput={handleOtherThemeChange}
      />
    </FormGroup>
  );
};

export default Step8;
