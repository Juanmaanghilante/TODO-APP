import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="h1counter">
      Has completado <span> {completed} </span> de <span>{total} </span> tareas
    </h1>
  );
};

export default TodoCounter;
