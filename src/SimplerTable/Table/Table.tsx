import { css } from "@emotion/css";

const Table = () => {
  return (
    <table
      className={css`
        width: 100%;
        border-collapse: separate;
        box-sizing: border-box;
      `}
    >
      <thead>
        <tr>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px 10px 10px 0;
              text-align: left;
              border-bottom: 1px solid #0b1424;
            `}
          >
            Last Update: June 14th, 10:00 AM
          </th>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px;
              border-bottom: 1px solid #0b1424;
            `}
          >
            Jul 20
          </th>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px;
              border-bottom: 1px solid #0b1424;
            `}
          >
            Jul 21
          </th>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px;
              border-bottom: 1px solid #0b1424;
            `}
          >
            Jul 22
          </th>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px;
              border-bottom: 1px solid #0b1424;
            `}
          >
            Jul 23
          </th>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px;
              border-bottom: 1px solid #0b1424;
            `}
          >
            Jul 24
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px 10px 10px 0;
              text-align: left;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              border-right: 1px solid rgb(203 213 225);
            `}
          >
            Temperature - Above Canopy Max
          </th>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;82.5°F
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            85.5°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            85.5°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            89.5°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            83.5°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            82.5°F
          </td>
        </tr>
        <tr>
          <th
            className={css`
              vertical-align: middle;
              padding: 10px 10px 10px 0;
              text-align: left;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              border-right: 1px solid rgb(203 213 225);
            `}
          >
            Temperature - In Canopy Max
          </th>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            86.3°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            85.5°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            86.2°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            87.5°F
          </td>
          <td
            className={css`
              vertical-align: middle;
              padding: 10px;
              text-align: center;
              font-weight: 600;
              user-select: none;
              box-sizing: border-box;
              border-bottom: 1px solid rgb(203 213 225);
              &:not(:last-child) {
                border-right: 1px solid rgb(203 213 225);
              }
            `}
          >
            83.2°F
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
