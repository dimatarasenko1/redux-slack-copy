export function selectChannel(channel) {
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
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: "SET_MESSAGES",
    payload: promise
  };
}

export function setValue(value) {
  return {
    type: "SET_VALUE",
    payload: value
  };
}

export function sendMessage(message, user, channel) {
  // response should be the result of sending message
  const body = {
    author: user,
    content: message
  };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  let status = null;
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => {
    status = r.code;
    r.json();
  });
  return {
    type: "SEND_MESSAGE",
    payload: status
  };
}
