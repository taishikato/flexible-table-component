import { memo } from "react";
import { css } from "@emotion/css";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";

const Body = () => {
  return (
    <tbody>
      <tr>
        <FirstCell>Temperature - Above Canopy Max</FirstCell>
        <Cell>85.5°F</Cell>
        <Cell>85.5°F</Cell>
        <Cell>89.5°F</Cell>
        <Cell>83.5°F</Cell>
        <Cell>82.5°F</Cell>
      </tr>
      <tr>
        <FirstCell>Temperature - In Canopy Max</FirstCell>
        <Cell>86.3°F</Cell>
        <Cell>85.5°F</Cell>
        <Cell>86.2°F</Cell>
        <Cell>87.5°F</Cell>
        <Cell>83.2°F</Cell>
      </tr>
      <tr>
        <FirstCell>Temperature - Below Canopy Max</FirstCell>
        <Cell>88.3°F</Cell>
        <Cell>
          <div
            className={css`
              display: flex;
              align-items: center;
              column-gap: 0.5rem;
            `}
          >
            <div
              className={css`
                padding: 20px;
                background-color: green;
                border-radius: 10px;
                color: white;
              `}
            >
              Testing dev
            </div>
            <div
              className={css`
                padding: 20px;
                background-color: green;
                border-radius: 10px;
                color: white;
              `}
            >
              Testing dev
            </div>
          </div>
        </Cell>
        <Cell>87.2°F</Cell>
        <Cell>87.5°F</Cell>
        <Cell>84.2°F</Cell>
      </tr>
      <tr>
        <FirstCell>Inversion</FirstCell>
        <Cell>-2.6°F</Cell>
        <Cell>-2.6°F</Cell>
        <Cell>-2.6°F</Cell>
        <Cell>
          <>
            <h2
              className={css`
                margin-bottom: 5px;
                font-weight: 900;
                font-size: 30px;
              `}
            >
              Big image test!
            </h2>
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_47/3112746/191121-baby-yoda-cs-959a.jpg"
              width="400"
              className={css`
                border-radius: 10px;
              `}
            />
          </>
        </Cell>
        <Cell>-2.6°F</Cell>
      </tr>
      <tr>
        <FirstCell>Humidity - Above Canopy</FirstCell>
        <Cell>-2.6°F</Cell>
        <Cell>-2.6°F</Cell>
        <Cell>-2.6°F</Cell>
        <Cell>-2.6°F</Cell>
        <Cell>-2.6°F</Cell>
      </tr>
    </tbody>
  );
};

export default memo(Body);
