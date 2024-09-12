import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import {
  FormGroup,
  Label,
  Input,
  OptionalTag,
  Message,
} from "../../Signup.styled";

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

    // 固定電話の市外局番リスト
    const fixedLinePrefixes = ["019", "0191", "0192", "0193", "0194", "0195"];
    // 携帯電話のプレフィックスリスト
    const mobilePrefixes = ["090", "080", "070"];

    // 固定電話のフォーマット
    if (fixedLinePrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
      if (phoneNumberLength <= 6) return phoneNumber;
      if (phoneNumberLength <= 10) {
        return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(
          4,
          6
        )}-${phoneNumber.slice(6)}`;
      }
      return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7)}`;
    }

    // 携帯電話のフォーマット
    if (mobilePrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
      if (phoneNumberLength < 4) return phoneNumber;
      if (phoneNumberLength < 7) {
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
      }
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
        3,
        7
      )}-${phoneNumber.slice(7)}`;
    }

    // その他の番号はそのまま返す
    return phoneNumber;
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
      <Message>数字だけ入力してください</Message>
    </FormGroup>
  );
};

export default Step3;
