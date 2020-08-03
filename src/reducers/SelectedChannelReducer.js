const SelectedChannelReducer = (state = "", action) => {
  switch (action.type) {
    case 'SELECT_CHANNEL': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default SelectedChannelReducer;
