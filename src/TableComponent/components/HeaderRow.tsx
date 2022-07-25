import type { ColumnProps } from "../types";
import { memo } from "react";
import HeaderCell from "./HeaderCell";
import HeaderCellFirst from "./HeaderCellFirst";

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
      <tr>
        {columns.map(({ title, render, key, cellCSS }, index) => {
          if (index === 0)
            return (
              <HeaderCellFirst
                key={key}
                isHeaderSticky={isHeaderSticky}
                isFirstColSticky={isFirstColSticky}
              >
                {title}
              </HeaderCellFirst>
            );

          return (
            <HeaderCell key={key} isHeaderSticky={isHeaderSticky}>
              {title}
            </HeaderCell>
          );
        })}
      </tr>
    </thead>
  );
};

export default memo(HeaderRow);
