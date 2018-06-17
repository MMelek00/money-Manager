const budgetI = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUDGETINCOME":
      return [action.payload, ...state];
      case "FETCH_BUDGETINCOME":
      return action.payload;
    default:
      return state;
  }
};

export default budgetI;
