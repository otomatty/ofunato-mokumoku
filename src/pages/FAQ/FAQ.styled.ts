import { styled } from "solid-styled-components";

export const Container = styled("div")`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Question = styled("div")`
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Answer = styled("div")`
  margin-left: 20px;
  display: none;
`;

export const Title = styled("h1")`
  text-align: center;
  margin-bottom: 20px;
`;

export const QuestionTitle = styled("h2")`
  font-size: 1.2em;
  margin: 0;
`;

export const AnswerText = styled("p")`
  margin: 0;
`;
