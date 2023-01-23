import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <Spinner
      className="spinner"
      style={{
        marginTop: "40vh",
        marginLeft: " 40vw",
        height: "100px",
        width: "100px",
      }}
      animation="border"
      variant="danger"
    />
  );
};

export default Loader;
