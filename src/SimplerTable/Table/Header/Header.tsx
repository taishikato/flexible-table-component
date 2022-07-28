import { memo } from "react";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";

const Header = () => {
  return (
    <thead>
      <tr>
        <FirstCell>Last Update: June 14th, 10:00 AM</FirstCell>
        <Cell>Jul 20</Cell>
        <Cell>Jul 21</Cell>
        <Cell>Jul 22</Cell>
        <Cell>Jul 23</Cell>
        <Cell>Jul 24</Cell>
      </tr>
    </thead>
  );
};

export default memo(Header);
