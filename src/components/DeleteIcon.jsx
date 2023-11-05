import React from "react";

const DeleteIcon = ({ onDelete }) => {
  return (
    <>
      <button type="delete" onClick={onDelete} className="tareaterminada2">
        {" "}
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </>
  );
};

export default DeleteIcon;
