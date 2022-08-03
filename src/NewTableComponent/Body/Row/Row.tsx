import { memo } from "react";
import { css } from "@emotion/css";
import type { DnDSortResult } from "../../hooks/useDnDSort/types";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";

type Props<T> = {
  item: DnDSortResult<T>;
};

const Row = <T extends string | number | JSX.Element>({ item }: Props<T>) => {
  return (
    <tr
      {...item.events}
      className={css`
        cursor: grab;
        position: relative;
      `}
    >
      <FirstCell>{item.value}</FirstCell>
      <Cell>Cell Content</Cell>
      <Cell>
        <img
          src="https://www.macleans.ca/wp-content/uploads/2019/11/BABY-YODA-MANDALORIAN-NOV19-810x445.jpg"
          className={css`
            width: 100px;
            border-radius: 10px;
          `}
        />
      </Cell>
      <Cell>Cell Content</Cell>
      <Cell>
        <div
          className={css`
            padding: 20px;
            border-radius: 10px;
            background-color: green;
            color: white;
          `}
        >
          test!
        </div>
      </Cell>
      <Cell>Cell Content</Cell>
    </tr>
  );
};

export default memo(Row);
