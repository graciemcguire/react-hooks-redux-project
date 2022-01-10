import React from "react";
import { removeHabit } from "./habitsSlice"
import { useDispatch } from 'react-redux'
import styles from "./Habit.module.css";


function HabitRow ( { habit } ) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeHabit(habit.id))
  }

  return (
    <div className={styles.row}>
      <h1>{habit.title}</h1>
      <button className={styles.button}>complete habit</button>
      <button className={styles.button} onClick={handleDelete}>
        remove habit
      </button>
    </div>
  );
}

export default HabitRow;