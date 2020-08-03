const MessagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, ...action.messages];
    default:
      return state;
  }
};

export default MessagesReducer;
