import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./UseLocalStorage";
const TodoContext=  React.createContext()

function TodoProvider({children}){
   
    const {
        item: todos,
        saveitem: saveTodos,
        Load,
        error,
      } = useLocalStorage("TODOS_V1", []);
      const [searchValue, setsearchValue] = useState("");
    //  modal para crear tarea
      const [openModal, setopenModal] = useState(false)
      const completedCount = todos.filter((todo) => todo.completed).length;
      const Totaltodos=todos.length
  //  modal
     

      // estado derivado
      const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchtext = searchValue.toLocaleLowerCase();
        return todoText.includes(searchtext);
      });
    
// añadir todo
const addTodo =(text)=>{
  const newTodos = [...todos];
       
       newTodos.push({
        text,
        completed:false,
       })
  saveTodos(newTodos)
}

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
   

    return(
    
<TodoContext.Provider value={
    {
        todos,
        Load,
        error,
        completedCount,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        setsearchValue,
        Totaltodos,
        openModal,
        setopenModal,
        addTodo
    }
}>
{children}
</TodoContext.Provider>
   ) 
}





export {TodoContext , TodoProvider}