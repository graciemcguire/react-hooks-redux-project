import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHabit, removeHabit } from "./habitsSlice";
import HabitForm from "./HabitForm";
import HabitRow from "./HabitRow";
import styles from "./Habit.module.css";

export function Habits () {
  
  const habits = useSelector((state) => state.habits);


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
