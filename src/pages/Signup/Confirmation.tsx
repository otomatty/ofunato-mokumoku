import { Component } from "solid-js";
import { FormData } from "../../types/formTypes";
import { ButtonGroup, Button } from "./Signup.styled";

interface ConfirmationProps {
  formData: FormData;
  onConfirm: () => void;
  onCancel: () => void;
}

const Confirmation: Component<ConfirmationProps> = ({
  formData,
  onConfirm,
  onCancel,
}) => {
  return (
    <div>
      <h2>確認画面</h2>
      <p>以下の内容で送信しますか？</p>
      <ul>
        <li>名前: {formData.name}</li>
        <li>メール: {formData.email}</li>
        <li>電話番号: {formData.phone}</li>
        <li>性別: {formData.gender}</li>
        <li>生年月日: {formData.birthdate}</li>
        <li>参加希望日: {formData.date}</li>
        <li>目的: {formData.purpose}</li>
        <li>その他の目的: {formData.otherPurpose}</li>
        <li>テーマ: {formData.theme}</li>
      </ul>
      <ButtonGroup>
        <Button type="button" onClick={onCancel} variant="secondary">
          戻る
        </Button>
        <Button type="button" onClick={onConfirm}>
          送信する
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Confirmation;
