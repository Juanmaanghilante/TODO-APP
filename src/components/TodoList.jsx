import React from "react";
import "../styles/TodoCounter.css";
const TodoList = ({ children }) => {
  return (
    <section className="TodolistSection">
      <h1 className="listh1">Lista de tareas</h1>
      <ul className="listul">{children}</ul>
    </section>
  );
};

export default TodoList;
