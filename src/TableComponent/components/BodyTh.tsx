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
        border: 1px solid rgb(203 213 225);
        padding: 12px;
        background-color: #ffffff;
        text-align: left;
        font-weight: 300;
        width: 300px;
        ${isFirstColSticky ? "position: sticky; z-index: 10; left: 0" : ""};
      `}
    >
      {children}
    </th>
  );
};

export default memo(BodyTh);
