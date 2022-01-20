import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// save our base URL
const baseUrl = "http://localhost:3000/habits";

export const fetchHabits = createAsyncThunk("habits/fetchHabits", () => {
  // return a Promise containing the data we want
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data);
});

export const addHabit = createAsyncThunk("habits/addHabit", (habit) => {
  // return a Promise containing the data we want
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
  }).then((r) => r.json());
});

export const removeHabit = createAsyncThunk("habits/removeHabit", (habitId) => {
  return fetch(`${baseUrl}/${habitId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
});

export const patchHabit = createAsyncThunk("habits/patchHabit", (habit) => {
  return fetch(`${baseUrl}/${habit.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(habit),
  }).then((r) => r.json());
});

const habitsSlice = createSlice({
  name: "habits",
  initialState: {
    entities: [], // array of habits
    status: "idle", // loading state
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchHabits.pending](state) {
      state.status = "loading";
    },
    [fetchHabits.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [addHabit.fulfilled](state, action) {
      state.entities.push(action.payload);
    },
    [removeHabit.fulfilled](state, action) {
      const index = state.entities.findIndex(
        (habit) => habit.id === action.payload
      );
      state.entities.splice(index, 1);
    },
    [patchHabit.fulfilled](state, action) {
      const updatedHabits = state.entities.map((habit) => {
        if (habit.id === action.payload.id) return action.payload;
        return habit;
      });
      state.entities = updatedHabits;
    },
  },
});

export default habitsSlice.reducer;
