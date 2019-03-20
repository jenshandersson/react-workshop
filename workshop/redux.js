// A simple implementation of Redux

const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const createStore = reducer => {
  let state = 0;
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
  };
  return {
    getState,
    dispatch
  };
};

const store = createStore(reducer);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
console.log(store.getState());
