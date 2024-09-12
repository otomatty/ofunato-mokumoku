import { FormGroup, Label, Input } from './Step1.styled';
import { RequiredTag } from '../../Signup.styled';
import { FormData } from '../../../../types/formTypes';

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step1 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
    setIsStepValid(target.value.trim() !== '');
  };

  return (
    <FormGroup>
      <Label for="name">
        名前<RequiredTag>必須</RequiredTag>
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onInput={handleChange}
        required
      />
    </FormGroup>
  );
};

export default Step1;
