export const setChannel = (channel) => {
  return {
    type: 'SET_CHANNEL',
    payload: channel
  };
};

export const addMessages = (message, selectedChannel) => {
  return {
    type: 'ADD_MESSAGE',
    payload: { message, selectedChannel }
  };
};

