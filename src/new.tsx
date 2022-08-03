import { memo } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import Table from "./NewTableComponent/table";

const New = () => {
  return (
    <>
      <Link
        to="/"
        style={{ marginBottom: "30px", display: "block", textAlign: "center" }}
      >
        Go to the Gallery
      </Link>

      <div
        className={css`
          width: 500px;
          height: 650px;
          margin: 0 auto;
          overflow-x: auto;
        `}
      >
        <Table />
      </div>
    </>
  );
};
export default memo(New);
