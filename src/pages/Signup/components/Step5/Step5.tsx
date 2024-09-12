import { createSignal, createEffect } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import { FormGroup, Label, Input, OptionalTag } from "../../Signup.styled";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step5 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [birthdate, setBirthdate] = createSignal(formData.birthdate);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/\D/g, ""); // 数字以外を除去
    if (value.length <= 8) {
      if (value.length === 4) {
        // 年を4桁入力したら自動的に月を入力
        setBirthdate(value + "-");
      } else if (value.length === 6) {
        // 月を2桁入力したら自動的に日を入力
        setBirthdate(value.slice(0, 4) + "-" + value.slice(4, 6) + "-");
      } else if (value.length === 8) {
        const formattedDate = `${value.slice(0, 4)}-${value.slice(
          4,
          6
        )}-${value.slice(6, 8)}`;
        setBirthdate(formattedDate);
        setFormData({ ...formData, birthdate: formattedDate });
      } else {
        setBirthdate(value);
        setFormData({ ...formData, birthdate: value });
      }
    }
  };

  createEffect(() => {
    setIsStepValid(true); // 任意項目なので常に有効
  });

  const currentYear = new Date().getFullYear();

  return (
    <FormGroup>
      <Label for="birthdate">
        生年月日<OptionalTag>任意</OptionalTag>
      </Label>
      <Input
        type="date"
        id="birthdate"
        name="birthdate"
        value={birthdate()}
        onInput={handleChange}
        min="1920-01-01" // 年の範囲を1920年から現在までに制限
        max={`${currentYear}-12-31`}
        pattern="\d{4}-\d{2}-\d{2}" // YYYY-MM-DD形式
        inputMode="numeric" // テンキーを表示
        placeholder="YYYYMMDD"
      />
    </FormGroup>
  );
};

export default Step5;
