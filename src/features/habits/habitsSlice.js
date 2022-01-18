import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// save our base URL
const baseUrl = "http://localhost:3000/habits";

export const fetchHabits = createAsyncThunk("habits/fetchHabits", () => {
  // return a Promise containing the data we want
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data);
});

// export const addHabit = createAsyncThunk("habits/addHabit", (habit) => {
//   return fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(habit),
//   })
//     .then((r) => r.json())
//     .then((data) => console.log(data));
// });

const habitsSlice = createSlice({
  name: "habits",
  initialState: {
    entities: [], // array of habits
    status: "idle", // loading state
  },
  reducers: {
    addHabit(state, action) {
      fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((r) => r.json())
        .then(state.entities.push(action.payload));
    },
    removeHabit(state, action) {
      const index = state.entities.findIndex(
        (habit) => habit === action.payload
      );

      fetch(`${baseUrl}/${action.payload}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then(state.entities.splice(index, 1));
    },
    // patchHabit ( state, action ) {
      
    // },
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

export const { addHabit, removeHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
