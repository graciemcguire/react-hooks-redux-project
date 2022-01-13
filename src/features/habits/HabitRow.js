import React from "react";
import { removeHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";
import DayItem from "./DayItem";

function HabitRow ( { habit } ) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeHabit(habit.id));
  };

  const renderDays = () => {
    return habit.days.map((day) => (
      <DayItem habitId={habit.id} key={day.name} day={day} />
    ));
  };

  return (
    <div>
      <h3>{habit.title}</h3>
      <button onClick={handleDelete}>remove habit</button>
      <div>{renderDays()}</div>
    </div>
  );
}

export default HabitRow;
