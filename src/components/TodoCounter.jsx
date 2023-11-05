import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
const {
 completedCount,Totaltodos
}=React.useContext(TodoContext)

  return (
    <h1 className="h1counter">
      Has completado <span> {completedCount} </span> de <span>{Totaltodos} </span> tareas
    </h1>
  );
};

export default TodoCounter;
