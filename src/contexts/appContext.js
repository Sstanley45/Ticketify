import React, { useEffect, useReducer } from 'react'
import reducer from './reducer'
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
} from "./action";

export const PriceContext = React.createContext()

const initialState = {
    advance: 1000,  
    group: 4500,
    advanceTotal: 0,
    groupTotal: 0,
    totalCost: 0,
    advancePriceInput: 0,
    groupPriceInput:0,
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: '',
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });   
        setTimeout(() => {
            clearAlert()
        },4000)
    }
    const clearAlert = () => {
        dispatch({ type: HIDE_ALERT });
    }

    
    const calcAdvanceTotal = () => {
        dispatch({
          type: ADVANCE_TOTAL_VALUE,
          payload: state.advance * state.advancePriceInput,
        }); 
    }
    const calcGroupTotal = () => {
        dispatch({
          type: GROUP_TOTAL_VALUE,
          payload: state.group * state.groupPriceInput,
        });
    }
    const calcTotalCost = () => {
        
        dispatch({
          type: TOTAL_COST_VALUE,
          payload: state.advanceTotal + state.groupTotal,
        });
    }
    const getAdvancePriceInputValue = (e) => {
        dispatch({
          type: ADVANCE_PRICE_INPUT_VALUE,
          payload: e.target.value,
        });
    }
    const getGroupPriceInputValue = (e) => {
        dispatch({ type: GROUP_PRICE_INPUT_VALUE , payload:e.target.value});
    }
    const incrementAdvanceInput = () => {
        dispatch({
          type: INCREMENT_ADVANCE_VALUE,
          payload: state.advancePriceInput + 1
        });
    }
    const decrementAdvanceInput = () => {
        dispatch({
          type: DECREMENT_ADVANCE_VALUE,
          payload: state.advancePriceInput - 1,
        });
    }
    const incrementGroupPrice = () => {
        dispatch({
          type: INCREMENT_GROUP_VALUE,
          payload: state.groupPriceInput + 1
        });
    }
    const decrementGroupPrice = () => {
        dispatch({ type: DECREMENT_GROUP_VALUE, payload: state.groupPriceInput - 1 });
    }

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
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

export { AppProvider, initialState } 
