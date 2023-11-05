import TodoCounter from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateToDoButton from "../components/CreateToDoButton";
import "../styles/TodoCounter.css";

import { TodoProvider } from "../TodoContext";
import { TodosError } from "../components/TodosError";
import { Emptytodos } from "../components/Emptytodos";
import TodosLoading from "../components/TodosLoading";
import React from "react";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal/index";
import Todoform from "../components/Todoform";

function App() {
  return (
    <>
      <TodoProvider >
        <TodoCounter />
        <TodoSearch />
       
        <TodoContext.Consumer>
          {({
            // todos,
            Load,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setopenModal,
          }) => (
            <>
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
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                );
              })}
            </TodoList>
      
    
            {openModal &&(
          <Modal >   
       <Todoform/>
        </Modal>
      )}
        
            </>
          )}
          
        </TodoContext.Consumer>
        <CreateToDoButton />
         
           
      </TodoProvider>
    </>
  );
}

export default App;
