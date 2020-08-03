const INITIAL_STATE = ['general', 'react', 'paris'];

const ChannelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CHANNEL':
    {
      return [...state, action.payload];
    }
    default:
    {
      return state;
    }
  }
};

export default ChannelsReducer;
