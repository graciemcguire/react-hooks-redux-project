import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addHabit } from "./habitsSlice";
import { useDispatch } from "react-redux";
import styles from "./Habit.module.css";

export function HabitForm() {
  const [formData, setFormData] = useState({
    title: "",
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const habit = {
      ...formData,
      id: uuid(),
      days: [
        { name: "sunday", completed: false },
        { name: "monday", completed: false },
        { name: "tuesday", completed: false },
        { name: "wednesday", completed: false },
        { name: "thursday", completed: false },
        { name: "friday", completed: false },
        { name: "saturday", completed: false },
      ],
    };

    dispatch(addHabit(habit));

    setFormData({
      title: "",
    });
  }

  return (
    <div>
      <h1>Weekly Habit Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">create a new habit</label>
        <div>
          <textarea
            className={styles.textbox}
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
