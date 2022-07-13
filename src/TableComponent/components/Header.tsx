import type { ColumnProps } from "../types";
import { memo } from "react";
import HeaderRow from "./HeaderRow";
import FirstHeaderRow from "./FirstHeaderRow";

type ColumnsProps = {
  columns: ColumnProps[];
  isHeaderSticky: boolean;
  isFirstColSticky: boolean;
};

const Header = ({
  columns,
  isHeaderSticky,
  isFirstColSticky,
}: ColumnsProps) => {
  return (
    <thead>
      <tr>
        {columns.map(({ title, render, key }, index) => {
          if (index === 0)
            return (
              <FirstHeaderRow
                key={key}
                isHeaderSticky={isHeaderSticky}
                isFirstColSticky={isFirstColSticky}
              >
                {render ? render(title) : title}
              </FirstHeaderRow>
            );

          return (
            <HeaderRow key={key} isHeaderSticky={isHeaderSticky}>
              {render ? render(title) : title}
            </HeaderRow>
          );
        })}
      </tr>
    </thead>
  );
};

export default memo(Header);
