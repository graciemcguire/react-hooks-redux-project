import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import styles from "./Habit.module.css";

export default function DayItem ( { day } ) {
  
  const [ formData, setFormData ] = useState( {
    completed: false
  } )
  
  const dispatch = useDispatch();

  function handleChange ( event ) {
    console.log( day.name, event.target.checked );
    console.log(formData);
    // debugger
      setFormData({
        completed: event.target.checked,
      } );
    // dispatch(complete)
    }
  
  return (
    <form>
      <input
        type="checkbox"
        id={day.name}
        name={day.name}
        value={ day.completed }
        onChange={ handleChange }
      ></input>
      <label for={day.name}> {day.name}</label>
    </form>
  );
}
