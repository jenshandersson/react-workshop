const initialState = {
  total: 0,
  actions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        total: state.total + action.number,
        actions: [...state.actions, action.number]
      };
    case "UNDO":
      const newActions = [...state.actions];
      const last = newActions.pop();
      return {
        ...state,
        total: state.total - last,
        actions: newActions
      };
    default:
      return state;
  }
}
