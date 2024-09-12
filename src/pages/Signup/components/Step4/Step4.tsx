import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import {
  FormGroup,
  Label,
  Select,
  Input,
  OptionalTag,
} from "../../Signup.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step4 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [gender, setGender] = createSignal(formData.gender);
  const [customGender, setCustomGender] = createSignal(
    formData.customGender || ""
  );

  const handleGenderChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    setGender(target.value);
    setFormData({ ...formData, gender: target.value });
  };

  const handleCustomGenderChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setCustomGender(target.value);
    setFormData({ ...formData, customGender: target.value });
  };

  createEffect(() => {
    setIsStepValid(true); // 任意項目なので常に有効
  });

  return (
    <FormGroup>
      <Label for="gender">
        性別を選択してください<OptionalTag>任意</OptionalTag>
      </Label>
      <Select
        id="gender"
        name="gender"
        value={gender()}
        onChange={handleGenderChange}
      >
        <option value="">回答しない</option>
        <option value="male">男性</option>
        <option value="female">女性</option>
        <option value="custom">カスタム</option>
      </Select>
      {gender() === "custom" && (
        <Input
          type="text"
          id="customGender"
          name="customGender"
          placeholder="性別を入力してください"
          value={customGender()}
          onInput={handleCustomGenderChange}
        />
      )}
    </FormGroup>
  );
};

export default Step4;
