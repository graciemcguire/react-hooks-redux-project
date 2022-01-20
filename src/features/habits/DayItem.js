import React, { useState } from "react"

export default function DayItem({ day, updateDay }) {
  const name = day[0];
  const toggle = day[1];

  function handleChange ( event ) {
    const checked = event.target.checked
    console.log( 'in day', name, checked );
    updateDay(name)
  }

  return (
    <form>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={toggle}
        onChange={handleChange}
      ></input>
      <label name={day}> {day}</label>
    </form>
  );
}
