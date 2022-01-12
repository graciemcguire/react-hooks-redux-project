import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHabits } from "./habitsSlice";
// import HabitForm from "./HabitForm";
import HabitRow from "./HabitRow";
// import styles from "./Habit.module.css";

export function Habits () {
  
  const habits = useSelector( ( state ) => state.habits.entities );
  
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchHabits())
  }, [dispatch])

  const renderHabitRows = () => {
    return habits.map( ( habit ) => <HabitRow key={ habit.id } habit={ habit } /> );
  };
  
  return (
    <section>
      <h1>Habits</h1>
      <div>{renderHabitRows()}</div>
    </section>
  );
}
