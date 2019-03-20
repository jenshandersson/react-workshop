const ADD_CHAT = "CHAT::ADD_CHAT";

const defaultState = {
  chatLog: [],
  currentChat: {
    id: 0,
    msg: "",
    user: "Anonymous",
    timeStamp: 1472322852680
  }
};

const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT:
      return {
        ...state,
        chatLog: [...state.chatLog, payload]
      };
    default:
      return state;
  }
};
