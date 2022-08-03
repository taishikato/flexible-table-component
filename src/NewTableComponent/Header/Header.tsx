import { css } from "@emotion/css";
import { memo } from "react";
import Cell from "./Cell/Cell";
import type { ColumnProps } from "../../TableComponent";

const Header = ({ columns }: { columns: ColumnProps[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          if (index === 0)
            return (
              <th
                key={column.key}
                className={css`
                  min-width: 150px;
                  vertical-align: middle;
                  padding: 10px 10px 10px 0;
                  text-align: left;
                  border-bottom: 1px solid #0b1424;
                  position: sticky;
                  top: 0px;
                  left: 0;
                  z-index: 20;
                  background-color: #ffffff;
                `}
              >
                {column.title}
              </th>
            );

          return <Cell key={column.key}>{column.title}</Cell>;
        })}
      </tr>
    </thead>
  );
};

export default memo(Header);
