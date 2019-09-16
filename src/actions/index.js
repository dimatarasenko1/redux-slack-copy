export function selectChannel(channel) {
  // TODO: Pass channel to this
  return {
    type: "SELECT_CHANNEL",
    payload: channel
  };
}

export function selectUser(user) {
  return {
    type: "SELECT_USER",
    payload: user
  };
}

export function setMessages(channel = null) {
  let messages = [];
  if (channel) {
    fetch('https://wagon-chat.herokuapp.com/general/messages')
      .then(response => response.json())
      .then((data) => {
        const { msgs } = data;
        messages = msgs;
      });
  }
  return {
    type: "SET_MESSAGES",
    payload: messages
  };
}
