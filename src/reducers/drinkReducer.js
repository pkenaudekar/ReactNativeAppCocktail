export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_DRINKS':
      //console.log(actions.payload);
      return action.payload;
    default:
      return state;
  }
}
