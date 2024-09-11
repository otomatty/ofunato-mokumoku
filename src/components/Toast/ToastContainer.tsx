import { For, createSignal } from "solid-js";
import Toast, { ToastProps } from "./Toast";
import { ToastContainerWrapper } from "./Toast.styled";

export interface ToastItem extends ToastProps {
  id: number;
}

const [toasts, setToasts] = createSignal<ToastItem[]>([]);

export const addToast = (toast: Omit<ToastProps, "onClose">) => {
  const id = Date.now();
  setToasts((prev) => [
    ...prev,
    { ...toast, id, onClose: () => removeToast(id) },
  ]);
};

const removeToast = (id: number) => {
  setToasts((prev) => prev.filter((toast) => toast.id !== id));
};

const ToastContainer = () => {
  return (
    <ToastContainerWrapper>
      <For each={toasts()}>{(toast) => <Toast {...toast} />}</For>
    </ToastContainerWrapper>
  );
};

export default ToastContainer;
