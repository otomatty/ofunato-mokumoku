import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import { FormGroup, Label, Input, OptionalTag } from "../../Signup.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step3 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [phone, setPhone] = createSignal(formData.phone);

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      7
    )}-${phoneNumber.slice(7, 11)}`;
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const formattedPhone = formatPhoneNumber(target.value);
    setPhone(formattedPhone);
    setFormData({ ...formData, phone: formattedPhone });
  };

  createEffect(() => {
    // 任意項目なので、常に有効とする
    setIsStepValid(true);
  });

  return (
    <FormGroup>
      <Label for="phone">
        電話番号を入力してください<OptionalTag>任意</OptionalTag>
      </Label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="例: 09012345678"
        value={phone()}
        onInput={handleChange}
        maxLength={13} // 最大13文字 (000-0000-0000 の形式)
      />
    </FormGroup>
  );
};

export default Step3;
