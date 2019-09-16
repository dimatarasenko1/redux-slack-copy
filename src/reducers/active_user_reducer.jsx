export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "SELECT_USER":
      return action.payload;
    default:
      return state;
  }
}
