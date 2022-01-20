import React from "react";
import { patchHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";

export default function DayItem({ day, habit }) {
  const dispatch = useDispatch();

  function handleChange ( event ) {
    const updateHabit = {
      ...habit,
      days: { ...habit.days, [event.target.name]: event.target.checked },
    };

    dispatch(patchHabit(updateHabit));
  }

  return (
    <form>
      <input
        type="checkbox"
        id={day[0]}
        name={ day[ 0 ] }
        checked={day[1]}
        onChange={handleChange}
      ></input>
      <label>{day}</label>
    </form>
  );
}
