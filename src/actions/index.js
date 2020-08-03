export const setChannel = (channel) => {
  return {
    type: 'SET_CHANNEL',
    payload: channel
  };
};

export const addMessage = (message) => {
  return {
    type: 'ADD_MESSAGE',
    payload: message
  };
};
