import type { ColumnProps } from "../types";
import { memo } from "react";
import Column from "./Column";
import FirstColumn from "./FirstColumn";

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
        {columns.map(({ title, render, key }, index) => {
          if (index === 0)
            return (
              <FirstColumn
                key={key}
                isHeaderSticky={isHeaderSticky}
                isFirstColSticky={isFirstColSticky}
              >
                {render ? render(title) : title}
              </FirstColumn>
            );

          return (
            <Column key={key} isHeaderSticky={isHeaderSticky}>
              {render ? render(title) : title}
            </Column>
          );
        })}
      </tr>
    </thead>
  );
};

export default memo(HeaderRow);
