import React from "react";
import { Habits } from "./features/habits/Habits";
import { HabitForm } from "./features/habits/HabitForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HabitForm />
      <Habits />
    </div>
  );
}

export default App;
