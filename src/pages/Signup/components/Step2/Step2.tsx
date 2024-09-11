import { createSignal } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import { FormGroup, Label, Input } from "./Step2.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step2 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [email, setEmail] = createSignal(formData.email);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
    setFormData({ ...formData, email: target.value });
    setIsStepValid(target.value.trim() !== "");
  };

  return (
    <FormGroup>
      <Label for="email">
        メールアドレス <span class="required">必須</span>
      </Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="メールアドレスを入力してください"
        value={email()}
        onInput={handleChange}
        required
      />
    </FormGroup>
  );
};

export default Step2;
