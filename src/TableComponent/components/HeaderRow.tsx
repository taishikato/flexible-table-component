import type { ColumnProps } from "../types";
import { memo } from "react";
import { css } from "@emotion/css";
import HeaderCell from "./HeaderCell";
import HeaderCellFirst from "./HeaderCellFirst";

type HeaderRowProps = {
  columns: ColumnProps[];
  isHeaderSticky: boolean;
  isFirstColSticky: boolean;
  headerRowCellCSS: Record<string, string | number>;
};

const HeaderRow = ({
  columns,
  headerRowCellCSS,
  isHeaderSticky,
  isFirstColSticky,
}: HeaderRowProps) => {
  return (
    <thead>
      <tr
        className={css`
          width: 100%;
        `}
      >
        {columns.map(({ title, render, key, cellCSS, width }, index) => {
          if (index === 0)
            return (
              <HeaderCellFirst
                key={key}
                isHeaderSticky={isHeaderSticky}
                isFirstColSticky={isFirstColSticky}
                width={width}
                headerRowCellCSS={headerRowCellCSS}
              >
                {title}
              </HeaderCellFirst>
            );

          return (
            <HeaderCell
              key={key}
              isHeaderSticky={isHeaderSticky}
              width={width}
              headerRowCellCSS={headerRowCellCSS}
            >
              {title}
            </HeaderCell>
          );
        })}
      </tr>
    </thead>
  );
};

export default memo(HeaderRow);
