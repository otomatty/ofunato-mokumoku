import { createSignal, createEffect } from 'solid-js';
import { FormData } from '../../../../types/formTypes';
import { FormGroup, Label, Input } from './Step3.styled';
import { OptionalTag } from '../../Signup.styled';

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step3 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [phone, setPhone] = createSignal(formData.phone);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setPhone(target.value);
    setFormData({ ...formData, phone: target.value });
  };

  createEffect(() => {
    // 電話番号は任意項目なので、常に有効とする
    setIsStepValid(true);
  });

  return (
    <FormGroup>
      <Label for="phone">
        電話番号<OptionalTag>任意</OptionalTag>
      </Label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="電話番号を入力してください"
        value={phone()}
        onInput={handleChange}
      />
    </FormGroup>
  );
};

export default Step3;
