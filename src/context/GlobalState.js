import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Camera", amount: -300 },
    { id: 2, text: "Salary", amount: 7000 },
    { id: 3, text: "Rice", amount: -600 },
    { id: 4, text: "House Rent", amount: 6000 },
    { id: 5, text: "Cloths", amount: 900 },
  ],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTrans(id) {
    dispatch({
      type: "DELECT_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transItem) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transItem,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTrans, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
