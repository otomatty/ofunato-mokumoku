import { createSignal, createEffect } from 'solid-js';
import { FormData } from '../../../../types/formTypes';
import {
  FormGroup,
  Label,
  Card,
  CardsContainer,
  CategoryLabel,
  TextArea,
} from './Step8.styled'; // 新しいスタイルファイルをインポート
import { themeData } from '../../../../data/themeData'; // テーマデータファイルをインポート

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step8 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [selectedThemes, setSelectedThemes] = createSignal<string[]>(
    formData.theme.split(',')
  );
  const [otherTheme, setOtherTheme] = createSignal(formData.otherPurpose || '');

  const handleThemeChange = (value: string) => {
    const currentThemes = selectedThemes();
    if (currentThemes.includes(value)) {
      setSelectedThemes(currentThemes.filter((theme) => theme !== value));
    } else {
      setSelectedThemes([...currentThemes, value]);
    }
    setFormData({
      ...formData,
      theme: selectedThemes().join(','),
      otherPurpose: otherTheme(),
    });
  };

  const handleOtherThemeChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setOtherTheme(target.value);
    setFormData({ ...formData, otherPurpose: target.value });
  };

  createEffect(() => {
    setIsStepValid(selectedThemes().length > 0 || otherTheme().trim() !== ''); // 必須項目に変更
  });

  return (
    <FormGroup>
      <Label for="theme">
        興味があるテーマを選んでください <span class="required">必須</span>
      </Label>
      {themeData.map((category) => (
        <>
          <CategoryLabel>{category.category}</CategoryLabel>
          <CardsContainer>
            {category.themes.map((item) => (
              <Card
                class={selectedThemes().includes(item.title) ? 'selected' : ''}
                onClick={() => handleThemeChange(item.title)}
              >
                {item.emoji} {item.title}
              </Card>
            ))}
          </CardsContainer>
        </>
      ))}
      <Label for="otherTheme">その他のテーマ</Label>
      <TextArea
        id="otherTheme"
        name="otherTheme"
        rows="3"
        placeholder="その他のテーマを入力してください"
        value={otherTheme()}
        onInput={handleOtherThemeChange}
      />
    </FormGroup>
  );
};

export default Step8;
