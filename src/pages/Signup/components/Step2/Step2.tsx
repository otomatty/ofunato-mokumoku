import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import { FormGroup, Label, Input, RequiredTag } from "../../Signup.styled";

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
  };

  createEffect(() => {
    // メールアドレスが入力されているかつ、基本的な形式チェックを行う
    const isValid = email().trim() !== "" && /\S+@\S+\.\S+/.test(email());
    setIsStepValid(isValid);
  });

  return (
    <FormGroup>
      <Label for="email">
        メールアドレスを入力してください<RequiredTag>必須</RequiredTag>
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
