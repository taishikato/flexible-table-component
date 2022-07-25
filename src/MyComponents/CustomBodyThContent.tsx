import drag from "../assets/drag.svg";
import { css } from "@emotion/css";
import { memo } from "react";

const CustomBodyThContent = ({ title }: { title: string }) => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        column-gap: 0.75rem;
      `}
    >
      <img src={drag} />
      {title}
    </div>
  );
};

export default memo(CustomBodyThContent);
