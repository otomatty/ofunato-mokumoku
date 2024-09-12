import { Component } from "solid-js";
import { A } from "@solidjs/router";
import {
  ThankYouWrapper,
  ThankYouTitle,
  ThankYouMessage,
  ButtonWrapper,
  Button,
} from "./ThankYou.styled";

const ThankYou: Component = () => {
  return (
    <ThankYouWrapper>
      <ThankYouTitle>お申し込みありがとうございます</ThankYouTitle>
      <ThankYouMessage>
        お申し込みが正常に完了しました。後ほど、確認のメールをお送りいたします。
      </ThankYouMessage>
      <ButtonWrapper>
        <Button as={A} href="/">
          トップページに戻る
        </Button>
      </ButtonWrapper>
    </ThankYouWrapper>
  );
};

export default ThankYou;
