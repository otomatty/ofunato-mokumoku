export interface FormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  customGender?: string; // 追加: カスタム性別のプロパティ
  birthdate: string;
  date: string;
  purpose: string;
  otherPurpose: string;
  theme: string;
}
