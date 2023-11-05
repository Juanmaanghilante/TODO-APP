import React from "react";

const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <>
      <button
        type=""
        className={`tareaterminada ${completed && "tareaterminadax"}`}
        onClick={onComplete}
      >
        {" "}
        <i className="fa-solid fa-check"></i>
      </button>
    </>
  );
};

export default CompleteIcon;
