import { Component } from "solid-js";
import {
  ContactWrapper,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  Button,
} from "./Contact.styled";

const Contact: Component = () => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    alert("お問い合わせが送信されました！");
  };

  return (
    <ContactWrapper>
      <h1>お問い合わせ</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">
            お名前 <span class="required">必須</span>
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="お名前を入力してください"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">
            メールアドレス <span class="required">必須</span>
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="メールアドレスを入力してください"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">
            問い合わせ項目 <span class="required">必須</span>
          </Label>
          <Select id="category" name="category" required>
            <option value="">選択してください</option>
            <option value="general">一般的な問い合わせ</option>
            <option value="event">イベントについて</option>
            <option value="support">サポートについて</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label for="message">
            メッセージ <span class="optional">任意</span>
          </Label>
          <TextArea
            id="message"
            name="message"
            rows="5"
            placeholder="メッセージを入力してください"
          ></TextArea>
        </FormGroup>
        <Button type="submit">送信</Button>
      </Form>
    </ContactWrapper>
  );
};

export default Contact;
