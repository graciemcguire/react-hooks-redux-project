import React from "react";
import { removeHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";
import DayItem from "./DayItem";

function HabitRow({ habit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeHabit(habit.id));
  };

  const renderDays = () => {
    return Object.entries(habit.days).map((day) => (
      <DayItem habit={habit} key={day} day={day} />
    ));
  };

  return (
    <div className="habit-row">
      <div className="habit-info">
        <h3>{habit.title}</h3>
        <button onClick={handleDelete}>remove habit</button>
      </div>
      <div className="habit-days">{renderDays()}</div>
    </div>
  );
}

export default HabitRow;
