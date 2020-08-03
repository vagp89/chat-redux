const SelectedChannelReducer = (state = "", action) => {
  switch (action.type) {
    case 'SET_CHANNEL': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default SelectedChannelReducer;
