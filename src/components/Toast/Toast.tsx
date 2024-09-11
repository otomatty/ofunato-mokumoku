import { createEffect, onCleanup } from "solid-js";
import { ToastWrapper, CloseButton } from "./Toast.styled";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const Toast = (props: ToastProps) => {
  let timer: number | undefined;

  createEffect(() => {
    if (props.duration) {
      timer = window.setTimeout(props.onClose, props.duration);
    }
  });

  onCleanup(() => {
    if (timer !== undefined) {
      window.clearTimeout(timer);
    }
  });

  return (
    <ToastWrapper class={props.type || ""}>
      <span>{props.message}</span>
      <CloseButton onClick={props.onClose}>&times;</CloseButton>
    </ToastWrapper>
  );
};

export default Toast;
