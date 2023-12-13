import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const MiniLoader = () => {
  return (
    <div style={{ height: "100vh", width: "100%"}}>
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
      }}
    >
      <ThreeCircles
        height="40"
        width="40"
        color="#ff8d0b"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
    </div>
  );
};

export default MiniLoader;
