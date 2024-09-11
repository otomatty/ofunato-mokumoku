import { styled } from "solid-styled-components";

export const TooltipWrapper = styled("div")`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled("div")<{
  position: string;
  visible: boolean;
}>`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition:
    opacity 0.3s,
    visibility 0.3s;
  z-index: 1000;

  ${(props) => {
    switch (props.position) {
      case "top":
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 5px;
        `;
      case "bottom":
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 5px;
        `;
      case "left":
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 5px;
        `;
      case "right":
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 5px;
        `;
      default:
        return "";
    }
  }}

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 5px;

    ${(props) => {
      switch (props.position) {
        case "top":
          return `
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-color: #333 transparent transparent transparent;
          `;
        case "bottom":
          return `
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-color: transparent transparent #333 transparent;
          `;
        case "left":
          return `
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            border-color: transparent transparent transparent #333;
          `;
        case "right":
          return `
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
            border-color: transparent #333 transparent transparent;
          `;
        default:
          return "";
      }
    }}
  }
`;
