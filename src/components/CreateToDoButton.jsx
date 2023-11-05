import React from "react";
import { TodoContext } from "../TodoContext";

const CreateToDoButton = () => {
 const{openModal,setopenModal}=React.useContext(TodoContext)
// todos aca creamos la funcion gracias a react context  en el onClick aparece o no nuestro modal
  return (
    <button
      className="button1"
      onClick={() => {
       console.log('click!!!!!!');
       if (!openModal) {
        setopenModal(true)
       } else {
        setopenModal(false)
       }
       
     
      }}
    >
      Add new task
    </button>
  );
};

export default CreateToDoButton;
