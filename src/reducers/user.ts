import { LOG_IN, LOG_OUT } from "../actions/user";

const initialState = {
  loggedInUser: null
};

export default function(
  state = initialState,
  action: { type: string; user: object }
) {
  switch (action.type) {
    case LOG_IN:
      // NEVER mutate the state
      return {
        ...state,
        loggedInUser: action.user
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
