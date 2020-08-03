export const setChannel = (channel) => {
  return {
    type: 'SET_CHANNEL',
    payload: channel
  };
};
// TODO: add and export your own actions
export const selectChannel = (channel) => {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
};
