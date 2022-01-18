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
    return Object.entries(habit.days).map((day) => (
      console.log(day[1])
      
      // <DayItem habitId={habit.id} key={day[0]} day={day} />
    ));
  };

  
  // function patchHabit( habitId, action='habits/patchHabit', day ) {
  //   const foundHabit = habits.find( habit => habit.id === habitId )
  //   {...foundHabit, habit.days[day] = !habit.days[day]}
  // }

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
