import { Component } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import {
  ConfirmationWrapper,
  ConfirmationTitle,
  ConfirmationMessage,
  ConfirmationList,
  ConfirmationItem,
  ItemLabel,
  ItemValue,
  ButtonGroup,
  Button,
} from "./Confirmation.styled";

interface ConfirmationProps {
  formData: FormData;
  onConfirm: () => Promise<void>; // Promiseを返すように変更
  onCancel: () => void;
}

// 日付をフォーマットする関数
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // 終了時間を計算（例：3時間後）
  const endDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);
  const endHours = endDate.getHours().toString().padStart(2, "0");
  const endMinutes = endDate.getMinutes().toString().padStart(2, "0");

  return `${year}/${month}/${day}（${dayOfWeek}）${hours}:${minutes}~${endHours}:${endMinutes}`;
};

const Confirmation: Component<ConfirmationProps> = ({
  formData,
  onConfirm,
  onCancel,
}) => {
  const handleConfirm = async () => {
    try {
      await onConfirm();
      // onConfirmが成功した場合、リダイレクトは親コンポーネントで処理されます
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("申し込みの送信中にエラーが発生しました。");
    }
  };

  return (
    <ConfirmationWrapper>
      <ConfirmationTitle>確認画面</ConfirmationTitle>
      <ConfirmationMessage>以下の内容で送信しますか？</ConfirmationMessage>
      <ConfirmationList>
        <ConfirmationItem>
          <ItemLabel>名前:</ItemLabel>
          <ItemValue>{formData.name}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>メール:</ItemLabel>
          <ItemValue>{formData.email}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>電話番号:</ItemLabel>
          <ItemValue>{formData.phone || "未入力"}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>性別:</ItemLabel>
          <ItemValue>{formData.gender || "回答しない"}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>生年月日:</ItemLabel>
          <ItemValue>{formData.birthdate || "未入力"}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>参加希望日:</ItemLabel>
          <ItemValue>
            {formData.date ? formatDate(formData.date) : "未選択"}
          </ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>目的:</ItemLabel>
          <ItemValue>{formData.purpose}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>その他の目的:</ItemLabel>
          <ItemValue>{formData.otherPurpose || "なし"}</ItemValue>
        </ConfirmationItem>
        <ConfirmationItem>
          <ItemLabel>テーマ:</ItemLabel>
          <ItemValue>{formData.theme || "未選択"}</ItemValue>
        </ConfirmationItem>
      </ConfirmationList>
      <ButtonGroup>
        <Button onClick={onCancel} variant="secondary">
          戻る
        </Button>
        <Button onClick={handleConfirm}>送信する</Button>
      </ButtonGroup>
    </ConfirmationWrapper>
  );
};

export default Confirmation;
