const initStatistics = {
  Shopping: 0,
  Clothing: 0,
  Education: 0,
  Family: 0,
  Health: 0,
  House: 0,
  Food_Drink: 0
};

const statistics = (state = initStatistics, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const newExpense = Number(state.expenses) + Number(action.payload);
      const newTotal = Number(state.total) - Number(action.payload);
      return { ...state, total: newTotal, expenses: newExpense };
    case "ADD_INCOMES":
      const newIncome = Number(state.income) + Number(action.payload);
      const newTotall = Number(state.total) + Number(action.payload);
      return { ...state, total: newTotall, income: newIncome };
    case "RESET_EXPENSE":
      return 0;
    default:
      return state;
  }
};

export default statistics;
