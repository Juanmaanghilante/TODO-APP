// import React from "react"
import { useState } from "react";
import React from "react";

// actualizando usuarios en local storage persistencia de datos
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [Load, setLoad] = useState(true);
  const [error, seterror] = useState(false);
  // const localStorageItem = localStorage.getItem(itemName);

  // let parsedItem;

  React.useEffect(() => {
   setTimeout(()=>{
    try {
      const localStorageItem = localStorage.getItem(itemName);
  
      let parsedItem;
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
  setItem(parsedItem)
        setLoad(false);
      }
     } catch (error) {
      seterror(true)
      setLoad(false);
     }
   },1000)
  },[initialValue,itemName]);

  const saveitem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveitem, Load, error };
}
export { useLocalStorage };
