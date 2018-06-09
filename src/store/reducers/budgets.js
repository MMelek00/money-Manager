const budgets = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUDGET":
      return [action.payload, ...state];
    case "EDIT_BUDGET":
      const index = state.findIndex(budget => budget.id === action.payload.id);
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default budgets;
