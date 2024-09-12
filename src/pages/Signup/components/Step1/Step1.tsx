import { createSignal, createEffect } from "solid-js";
import { FormGroup, Label, Input, RequiredTag } from "../../Signup.styled";
import { FormData } from "../../../../types/formTypes";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step1 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [name, setName] = createSignal(formData.name);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setName(target.value);
    setFormData({ ...formData, name: target.value });
  };

  createEffect(() => {
    setIsStepValid(name().trim() !== "");
  });

  return (
    <FormGroup>
      <Label for="name">
        お名前を入力してください<RequiredTag>必須</RequiredTag>
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={name()}
        onInput={handleChange}
        required
      />
    </FormGroup>
  );
};

export default Step1;
