import { createSignal, JSX } from "solid-js";
import { TooltipWrapper, TooltipContent } from "./Tooltip.styled";

export interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  children: JSX.Element;
}

const Tooltip = (props: TooltipProps) => {
  const [isVisible, setIsVisible] = createSignal(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <TooltipWrapper onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {props.children}
      <TooltipContent position={props.position || "top"} visible={isVisible()}>
        {props.content}
      </TooltipContent>
    </TooltipWrapper>
  );
};

export default Tooltip;
