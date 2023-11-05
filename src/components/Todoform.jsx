import React from "react";
import { useState } from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "../TodoContext";
const Todoform = () => {

const {
    setopenModal,
 addTodo
}=React.useContext(TodoContext)
// estado local para crear TO-DO
const [newTodoVlue, setnewTodoVlue] = useState('')

const onSubmit=(event)=>{
    event.preventDefault();
   addTodo(newTodoVlue)
    setopenModal(false)}
      
        const onCancel=(event)=>{
            event.preventDefault();
            setopenModal(false)}

            const onChange=(event)=>{
           setnewTodoVlue( event.target.value  )  
            }
    

  return (
    <form onSubmit={onSubmit}>
      <label className="label-form">Escribe tu nueva tarea</label>
      <textarea placeholder="tareas" value={newTodoVlue} onChange={onChange}>

      </textarea>
      <div className="todoform-buttoncontainer">
        <button   
        type="button" onClick={onCancel}
        className="Todoform-button--cancel">cancelar</button>
        <button 
        type="submit"
        className="Todoform-button--add">añadir tarea</button>
      </div>
    </form>
  );
};

export default Todoform;
