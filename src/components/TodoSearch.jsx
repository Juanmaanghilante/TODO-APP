import React from "react";

const TodoSearch = ({ searchValue, setsearchValue }) => {
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
