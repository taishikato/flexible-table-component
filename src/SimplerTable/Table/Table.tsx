import { memo } from "react";
import { css } from "@emotion/css";
import Header from "./Header/Header";
import Body from "./Body/Body";

const Table = () => {
  return (
    <table
      className={css`
        width: 100%;
        border-collapse: separate;
        box-sizing: border-box;
      `}
    >
      <Header />
      <Body />
    </table>
  );
};

export default memo(Table);
