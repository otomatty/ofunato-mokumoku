import { createSignal, createEffect } from 'solid-js';
import { FormData } from '../../../../types/formTypes';
import {
  FormGroup,
  Label,
  Card,
  CardsContainer,
  TextArea,
} from './Step7.styled';
import { RequiredTag } from '../../Signup.styled';

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step7 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [purpose, setPurpose] = createSignal(formData.purpose);
  const [otherPurpose, setOtherPurpose] = createSignal(formData.otherPurpose);

  const handlePurposeChange = (value: string) => {
    setPurpose(value);
    setFormData({ ...formData, purpose: value });
  };

  const handleOtherPurposeChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setOtherPurpose(target.value);
    setFormData({ ...formData, otherPurpose: target.value });
  };

  createEffect(() => {
    setIsStepValid(purpose() !== ''); // 必須項目に変更
  });

  return (
    <FormGroup>
      <Label for="purpose">
        参加目的<RequiredTag>必須</RequiredTag>
      </Label>
      <CardsContainer>
        {[
          '集中して学習したい',
          '他の参加者と交流したい',
          '新しいスキルを習得したい',
          '相談やアドバイスをしたい',
          'その他',
        ].map((item) => (
          <Card
            class={purpose() === item ? 'selected' : ''}
            onClick={() => handlePurposeChange(item)}
          >
            {item}
          </Card>
        ))}
      </CardsContainer>
      {purpose() === 'その他' && (
        <TextArea
          id="otherPurpose"
          name="otherPurpose"
          rows="3"
          placeholder="その他の目的を入力してください"
          value={otherPurpose()}
          onInput={handleOtherPurposeChange}
        />
      )}
    </FormGroup>
  );
};

export default Step7;
