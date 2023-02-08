import React, { useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  ADVANCE_TOTAL_VALUE,
  GROUP_TOTAL_VALUE,
  TOTAL_COST_VALUE,
  ADVANCE_PRICE_INPUT_VALUE,
  GROUP_PRICE_INPUT_VALUE,
  INCREMENT_ADVANCE_VALUE,
  DECREMENT_ADVANCE_VALUE,
  INCREMENT_GROUP_VALUE,
  DECREMENT_GROUP_VALUE,
  SELECTED_TICKETS,
} from "./action";




export const PriceContext = React.createContext();

const initialState = {
  advance: 1000,
  group: 4500,
  advanceTotal: 0,
  groupTotal: 0,
  totalCost: 0,
  advancePriceInput: 0,
  groupPriceInput: 0,
  ticketToPay: [],
  isLoading: false,
  showAlert: false,
  toggleNavigate: false,
  alertType: "",
  alertText: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);



  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(() => {
      clearAlert();
    }, 4000);
  };
  const clearAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const calcAdvanceTotal = () => {
    dispatch({
      type: ADVANCE_TOTAL_VALUE,
      payload: state.advance * state.advancePriceInput,
    });
  };
  const calcGroupTotal = () => {
    dispatch({
      type: GROUP_TOTAL_VALUE,
      payload: state.group * state.groupPriceInput,
    });
  };
  const calcTotalCost = () => {
    dispatch({
      type: TOTAL_COST_VALUE,
      payload: state.advanceTotal + state.groupTotal,
    });
  };
  const getAdvancePriceInputValue = (e) => {
    dispatch({
      type: ADVANCE_PRICE_INPUT_VALUE,
      payload: e.target.value,
    });
  };
  const getGroupPriceInputValue = (e) => {
    dispatch({ type: GROUP_PRICE_INPUT_VALUE, payload: e.target.value });
  };
  const incrementAdvanceInput = () => {
    dispatch({
      type: INCREMENT_ADVANCE_VALUE,
      payload: state.advancePriceInput + 1,
    });
  };
  const decrementAdvanceInput = () => {
    dispatch({
      type: DECREMENT_ADVANCE_VALUE,
      payload: state.advancePriceInput > 0 ? state.advancePriceInput - 1 : 0,
    });
  };
  const incrementGroupPrice = () => {
    dispatch({
      type: INCREMENT_GROUP_VALUE,
      payload: state.groupPriceInput + 1,
    });
  };
  const decrementGroupPrice = () => {
    dispatch({
      type: DECREMENT_GROUP_VALUE,
      payload: state.groupPriceInput > 0 ? state.groupPriceInput - 1 : 0,
    });
  };
  const handlebtnPay = () => {
    if (state.advancePriceInput) {
      const selectedTicket = {
        name: "advance",
        cost: 1000,
        quantity: state.advancePriceInput,
        subTotal: state.advancePriceInput * 1000,
      };
      dispatch({ type: SELECTED_TICKETS, payload: selectedTicket });
     
    }
    if (state.groupPriceInput) {
      const selectedTicket = {
        name: "Group of 5",
        cost: 4500,
        quantity: state.groupPriceInput,
        subTotal: state.groupPriceInput * 4500,
      };
      dispatch({ type: SELECTED_TICKETS, payload: selectedTicket });
     
    } else {
      displayAlert()
    }
  };

  return (
    <PriceContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        calcAdvanceTotal,
        calcGroupTotal,
        calcTotalCost,
        getAdvancePriceInputValue,
        incrementAdvanceInput,
        decrementAdvanceInput,
        getGroupPriceInputValue,
        incrementGroupPrice,
        decrementGroupPrice,
        handlebtnPay,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export { AppProvider, initialState };
