const budgetI = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUDGETIncome":
      return [action.payload, ...state];
    case "EDIT_BUDGETIncome":
      const index = state.findIndex(
        budgett => budgett.id === action.payload.id
      );
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default budgetI;
