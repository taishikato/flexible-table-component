import { memo } from "react";
import { css } from "@emotion/css";

type BodyThProps = Readonly<{
  children: JSX.Element | string | number;
  isFirstColSticky: boolean;
}>;

const BodyTh = ({ children, isFirstColSticky }: BodyThProps) => {
  return (
    <th
      className={css`
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding-left: 10px;
        border: 1px solid rgb(203 213 225);
        background-color: #ffffff;
        font-weight: 300;
        width: 300px;
        box-sizing: border-box;
        ${isFirstColSticky ? "position: sticky; z-index: 10; left: 0" : ""};
      `}
    >
      {children}
    </th>
  );
};

export default memo(BodyTh);
