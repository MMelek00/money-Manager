const transactions = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS":
      return action.payload;
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    case "EDIT_TRANSACTION":
      const index = state.findIndex(
        transaction => transaction.id === action.payload.id
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

export default transactions;
