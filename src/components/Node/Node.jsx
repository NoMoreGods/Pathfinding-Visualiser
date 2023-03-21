import React from "react";

export const Node = ({ el }) => {
  let extraClassName = el.isTarget
    ? "node-target"
    : el.isStart
    ? "node-start"
    : el.isVisited
    ? "node-visited"
    : "";

  return (
    <div key={el.id} className={`node ${extraClassName}`}>
      Node
    </div>
  );
};
