const actionsCreator = (initReducers) => {
  const { actions, reducers } = Object.entries(initReducers).reduce((acc, [actionKey, reducer]) => {
    acc[]
  }, { actions: [], reducers: [] })

  return {
    reducers,
    actions: Object.entries(reducers).
  }
}
const tasksReducer = {
  added: (state, payload) => {
    return [...state, {
      id: payload.id,
      text: payload.text,
      done: false
    }];
  },
  changed: (state, payload) => {
    return state
  }
}

