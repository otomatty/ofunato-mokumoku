import { JSX } from "solid-js";
import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./Card.styled";

export interface CardProps {
  title?: string;
  children: JSX.Element;
  footer?: JSX.Element;
}

const Card = (props: CardProps) => {
  return (
    <CardWrapper>
      {props.title && (
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{props.children}</CardContent>
      {props.footer && <CardFooter>{props.footer}</CardFooter>}
    </CardWrapper>
  );
};

export default Card;
