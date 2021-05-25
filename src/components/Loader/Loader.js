import React from "react";
import Loader from "react-loader-spinner";

const LoaderElement = () => {
  return (
    <Loader
      type="Puff"
      color="#f10f0f"
      height={60}
      width={60}
      style={{
        position: "absolute",
        top: "calc(50vh - 30px)",
        left: "calc(50vw - 30px)",
      }}
    />
  );
};

export default LoaderElement;
