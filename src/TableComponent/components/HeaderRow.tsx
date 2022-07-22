import type { ColumnProps } from "../types";
import { memo } from "react";
import Column from "./Column";
import FirstColumn from "./FirstColumn";
import { css } from "@emotion/css";

type HeaderRowProps = {
  columns: ColumnProps[];
  isHeaderSticky: boolean;
  isFirstColSticky: boolean;
};

const HeaderRow = ({
  columns,
  isHeaderSticky,
  isFirstColSticky,
}: HeaderRowProps) => {
  return (
    <thead>
      <tr
        className={css`
          display: flex;
          width: 100%;
        `}
      >
        {columns.map(({ title, render, key, cellCSS }, index) => {
          if (index === 0)
            return (
              <FirstColumn
                key={key}
                isHeaderSticky={isHeaderSticky}
                isFirstColSticky={isFirstColSticky}
              >
                {title}
              </FirstColumn>
            );

          return (
            <Column key={key} isHeaderSticky={isHeaderSticky}>
              {title}
            </Column>
          );
        })}
      </tr>
    </thead>
  );
};

export default memo(HeaderRow);
