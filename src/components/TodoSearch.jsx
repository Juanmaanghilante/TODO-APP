import React from "react";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {


  const {
    searchValue,setsearchValue
   }=React.useContext(TodoContext)
   
  console.log(" buscando todo de " + searchValue);

  return (
    <div className="searchdiv">
      <input
        className="placeholder"
        placeholder="insertar tarea"
        value={searchValue}
        onChange={(event) => {
          setsearchValue(event.target.value);
        }}
      />
    </div>
  );
};

export  {TodoSearch};
