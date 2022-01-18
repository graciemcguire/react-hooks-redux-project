import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import styles from "./Habit.module.css";

export default function DayItem ( { habitId, day } ) {
  
  const [ formData, setFormData ] = useState( {
    completed: false
  } )
  
  function handleChange ( event ) {
    console.log( day[0], event.target.checked );
    console.log(formData);
      setFormData({
        completed: event.target.checked,
      } );
    }
  
  return (
    <form>
      <input
        type="checkbox"
        id={day[0]}
        name={day[0]}
        value={day.completed}
        onChange={handleChange}
      ></input>
      <label name={day[0]}> {day[0]}</label>
    </form>
  );
}
