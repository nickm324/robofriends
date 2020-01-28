import React from "react";

const Scroll = props => {
  return (
    <div
      className="hidescroll"
      style={{
        overflow: "scroll",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
