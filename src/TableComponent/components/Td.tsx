import { memo } from "react";
import { css } from "@emotion/css";

type TdProps = {
  children: JSX.Element | string | number;
};

const Td = ({ children }: TdProps) => {
  return (
    <td
      className={css`
        border: 1px solid rgb(203 213 225);
        padding: 12px;
        font-weight: 600;
        text-align: center;
        flex: 1 1 0%;
      `}
    >
      {children}
    </td>
  );
};

export default memo(Td);
