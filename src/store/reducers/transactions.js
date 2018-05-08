// @ToDo load transactions from ayscnStorage

const transactions = (state = [], action) => {
  switch (action.type) {
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
