import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// save our base URL
const baseUrl = "http://localhost:3000/habits";

export const fetchHabits = createAsyncThunk( "habits/fetchHabits", () => {
  // return a Promise containing the data we want
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data);
});

export const postHabit = createAsyncThunk( "habits/addHabits", ( habit ) => {
  // debugger
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: habit.id,
      title: habit.title,
      days: habit.days
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
} );

const habitsSlice = createSlice({
  name: "habits",
  initialState: {
    entities: [], // array of habits
    status: "idle", // loading state
  },
  reducers: {
    addHabit(state, action) {
      // using createSlice lets us mutate state!
      // state.entities.push(action.payload);
      postHabit(action.payload)
      state.entities.push(action.payload)
    },
    removeHabit(state, action) {
      state.entities.filter((habit) => habit.id !== action.payload);
    },
    updateHabit(state, action) {
      const habit = state.entities.find(
        (habit) => habit.id === action.payload.id
      );
      habit.title = action.payload.title;
    },
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
  },
});

export const { addHabit, removeHabit, updateHabit } = habitsSlice.actions;

export default habitsSlice.reducer;

