import { memo } from "react";
import { css } from "@emotion/css";

type TdProps = {
  children: JSX.Element | string | number;
  width: string | number;
};

const BodyCell = ({ children, width }: TdProps) => {
  return (
    <td
      className={css`
        min-width: ${width || undefined};
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 0%;
        border: 1px solid rgb(203 213 225);
        font-weight: 600;
        text-align: center;
      `}
    >
      {children}
    </td>
  );
};

export default memo(BodyCell);
