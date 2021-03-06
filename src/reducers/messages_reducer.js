export default function(state, action) {
  if (state === undefined) {
    return { channel: null, messages: [] };
  }
  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload;
    default:
      return state;
  }
}
