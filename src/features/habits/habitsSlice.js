export const addHabit = (habit) => {
  return {
    type: "habits/add",
    payload: habit,
  };
};

export const removeHabit = (id) => {
  return {
    type: "habits/remove",
    payload: id,
  };
};

export const completeHabit = (id) => {
  return {
    type: "habits/complete",
    payload: id,
  };
};


// Reducer
const initialState = []

export default function habitsReducer ( state = initialState, action ) {
  const { payload, type } = action
  switch ( type ) {
    case 'habits/add':
      return [ ...state, payload ]
    case 'habits/remove':
      return state.filter( (habit) => habit.id !== payload )
    // case 'habits/complete':
    //   return state.map( (habit) => {
    //     if(habit.id === payload) return { ...habit, complete: true }
    //   })
  default:
    return state;
  }
}

// export const selectHabits = (state) => state.habits.value;
