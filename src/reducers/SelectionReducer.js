export default (state = null, action) => {
  // always need to return a non-undefined value from reducer
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
