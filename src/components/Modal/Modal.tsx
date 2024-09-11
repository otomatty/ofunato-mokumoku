import { JSX, Show } from "solid-js";
import { Portal } from "solid-js/web";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  ModalFooter,
} from "./Modal.styled";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element;
  footer?: JSX.Element | undefined;
}

const Modal = (props: ModalProps) => {
  return (
    <Show when={props.isOpen}>
      <Portal>
        <Overlay onClick={props.onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{props.title}</ModalTitle>
              <CloseButton onClick={props.onClose}>&times;</CloseButton>
            </ModalHeader>
            <ModalContent>{props.children}</ModalContent>
            <Show when={props.footer}>
              <ModalFooter>{props.footer}</ModalFooter>
            </Show>
          </ModalContainer>
        </Overlay>
      </Portal>
    </Show>
  );
};

export default Modal;
