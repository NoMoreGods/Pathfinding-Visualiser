import React from "react";
import { dfs } from "../../algorithms/dfs";

export const Header = ({}) => {
  return (
    <div className="header">
      <button className="algo">Algorithms</button>
      <button className="algo">Maze & Patterns</button>
      <button className="algo">Add bomb</button>

      <select
        className="algo"
        aria-label="Default select example"
        value={algo}
        // onChange={(e) => setAlgo(e.target.value)}
      >
        <option value="">Choose your algorithm</option>
        <option value="dijkstra">Dijkstra</option>
        <option value="BFS">BFS</option>
        <option value="DFS">DFS</option>
      </select>
      <button className="algo" onClick={() => {}}>
        Visualize
      </button>
      <button className="algo">Clear Bomb</button>
      <button className="algo">Clear Walls & Weights</button>
      <button className="algo">Clear Path</button>
      <button className="">Speed</button>
    </div>
  );
};
