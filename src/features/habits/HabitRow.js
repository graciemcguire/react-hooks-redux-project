import React, { useState } from "react";
import { removeHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";
import DayItem from "./DayItem";

function HabitRow({ habit }) {
  const [habitData, setHabitData] = useState(habit);
  const [daysData, setDaysData] = useState(habit.days);
  // console.log( "habitData", habitData );
  // console.log("daysData", daysData);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeHabit(habit.id));
  };

  const renderDays = () => {
    return Object.entries(habitData.days).map((day) => (
      <DayItem updateDay={updateDay} key={day} day={day} />
    ));
  };

  function updateDay(dayName) {
    setDaysData({
      ...daysData,
      [dayName]: !daysData[dayName],
    });
    console.log(daysData);
  }

  function updateHabit(dayName) {
    setHabitData({
      ...habitData,
      days: { ...habitData.days, [dayName]: !habitData.days[dayName] },
    });
    console.log(habitData);
  }

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
