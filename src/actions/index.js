const channels = [{ name: 'general' }];
const channel = channels[0];

export function setChannels() {
  return {
    type: "SET_CHANNELS",
    payload: channels
  };
}

export function selectChannel() {
  // TODO: Pass channel to this
  return {
    type: "SELECT_CHANNEL",
    payload: channel
  };
}

export function selectUser(user) {
  // TODO: Pass channel to this
  return {
    type: "SELECT_USER",
    payload: user
  };
}
