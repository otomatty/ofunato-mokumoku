import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import { FormGroup, Label, Input } from "./Step3.styled";

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
    setIsStepValid(target.value.trim() !== "");
  };

  createEffect(() => {
    setIsStepValid(true); // 任意項目なので常に有効
  });

  return (
    <FormGroup>
      <Label for="phone">
        電話番号 <span class="optional">任意</span>
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
