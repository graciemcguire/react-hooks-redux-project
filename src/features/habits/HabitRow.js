import React from "react";
import { removeHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";
import styles from "./Habit.module.css";
import DayItem from "./DayItem";

function HabitRow({ habit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeHabit(habit.id));
  };

  function renderDays() {
    return habit.days.map( ( day ) => <DayItem habitId={habit.id} key={day.name} day={day} />);
  }

  return (
    <div className={styles.row}>
      <h1>{habit.title}</h1>
      <button onClick={handleDelete}>remove habit</button>
      <div>{renderDays()}</div>
    </div>
  );
}

export default HabitRow;
