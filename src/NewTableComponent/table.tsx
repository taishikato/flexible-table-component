import { memo } from "react";
import { useDnDSort } from "./hooks/useDnDSort/useDnDSort";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import FirstCell from "./Body/FirstCell/FirstCell";
import Cell from "./Body/Cell/Cell";
import Header from "./Header/Header";

// 並び替えしたい画像URLの配列
const imageList: string[] = ["Row header 1", "Row header 2", "Row header 3"];

const Table = () => {
  const results = useDnDSort(imageList);

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
        <table
          className={css`
            width: 100%;
            height: 700px;
            border-collapse: separate;
            border-spacing: 0px 0px;
            position: relative;
            box-sizing: border-box;
          `}
        >
          <Header />
          <tbody>
            {results.map((item) => (
              <tr key={item.key} {...item.events}>
                <FirstCell>{item.value}</FirstCell>
                <Cell>Cell Content</Cell>
                <Cell>
                  <img
                    src="https://www.macleans.ca/wp-content/uploads/2019/11/BABY-YODA-MANDALORIAN-NOV19-810x445.jpg"
                    className={css`
                      width: 300px;
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default memo(Table);
