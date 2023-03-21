import React, { useState, useEffect, useRef } from "react";
import { getGrid } from "../../utils/startingGrid.js";
import { dfs } from "../../algorithms/dfs";
import { Header } from "../Header/Header.jsx";
import { Node } from "../Node/Node.jsx";

const PathfinderVisualizer = () => {
  const [grid, setGrid] = useState(getGrid());
  const [algo, setAlgo] = useState("");
  const [gridTable, setGridTable] = useState(getGridTable(grid));
  const [restart, setRestart] = useState(false);

  // useEffect(() => {
  //   restartGrid();
  // }, [restart]);

  // function restartGrid() {
  //   setGrid(getGrid());
  // }

  // const gridTable = grid.map((row, idx) => {
  //   return (
  //     <>
  //       {row.map((el) => {
  //         let extraClassName = el.isTarget
  //           ? "node-target"
  //           : el.isStart
  //           ? "node-start"
  //           : el.isVisited
  //           ? "node-visited"
  //           : "";

  //         return <div key={el.id} className={`node ${extraClassName}`}></div>;
  //       })}
  //     </>
  //   );
  // });

  function getGridTable(grid) {
    let array = [];
    grid.forEach((element) => {
      element.forEach((child) => {
        array.push(useRef(child));
      });
    });
    return array;
  }
  console.log(gridTable);

  return (
    <div className="App">
      <Header algo={algo} />

      <div className="grid">
        {gridTable.map((el) => {
          let extraClassName = el.current.isTarget
            ? "node-target"
            : el.current.isStart
            ? "node-start"
            : el.current.isVisited
            ? "node-visited"
            : "";
          return (
            <div
              key={el.current.id}
              ref={el}
              className={`node ${extraClassName}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PathfinderVisualizer;
