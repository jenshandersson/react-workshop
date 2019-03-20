const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    case "MULTIPLY":
      return state * action.payload;
    default:
      return state;
  }
};

const actions = [
  { type: "ADD", payload: 0 },
  { type: "ADD", payload: 1 },
  { type: "ADD", payload: 2 },
  { type: "SUBTRACT", payload: 1 },
  { type: "MULTIPLY", payload: 2 }
];

const total = actions.reduce(reducer, 0);
console.log(total);
