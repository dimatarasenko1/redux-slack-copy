export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "SEND_MESSAGE":
      return action.payload;
    default:
      return state;
  }
}
