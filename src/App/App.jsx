import TodoCounter from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateToDoButton from "../components/CreateToDoButton";
import "../styles/TodoCounter.css"
import { useState } from "react";
import { useLocalStorage } from "../UseLocalStorage";
import { TodosError } from "../components/TodosError";
import { Emptytodos } from "../components/Emptytodos";
import TodosLoading from"../components/TodosLoading";
import React from "react";

function App() {
  // mis default todos se almacenan en el usestate de todos
  const {
    item: todos,
    saveitem: saveTodos,
    Load,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setsearchValue] = useState("");
  const completedCount = todos.filter((todo) => todo.completed).length;

  // estado derivado
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchtext = searchValue.toLocaleLowerCase();
    return todoText.includes(searchtext);
  });

  // cuando completo una tarea
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      {<TodoCounter completed={completedCount} total={todos.length} />}
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />

      <TodoList>
        {Load && <TodosLoading />}
        {error && <TodosError />}
        {!Load && searchedTodos.length === 0 && <Emptytodos />}

        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => -completeTodo(todo.text)}
              onDelete={() => -deleteTodo(todo.text)}
            />
          );
        })}
      </TodoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
