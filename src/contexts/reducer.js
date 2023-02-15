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
  HIDE_PAYMENT_PAGE,
} from "./action";

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state, showAlert:true, alertType: 'danger', alertText : 'please select at least one ticket'
        }
    }
    if (action.type === HIDE_ALERT) {
        return {
           ...state, showAlert:false, alertText:'',alertType:''
       }
    }
    if (action.type === ADVANCE_TOTAL_VALUE) {
        return {
            ...state,  advanceTotal: action.payload,
        }
    }
    if (action.type === GROUP_TOTAL_VALUE) {
        return {
          ...state,
          groupTotal: action.payload
        };
    } 
    if (action.type === TOTAL_COST_VALUE) {
        return {
            ...state, totalCost:action.payload
        }
    }
    if (action.type === ADVANCE_PRICE_INPUT_VALUE) {
        return {
          ...state,
          advancePriceInput:action.payload
        };
    }
    if ((action.type === GROUP_PRICE_INPUT_VALUE)) {
        return {
          ...state,
          groupPriceInput : action.payload
        };
    }
      if (action.type === INCREMENT_ADVANCE_VALUE) {
        return {
          ...state,
          advancePriceInput: action.payload,
        };
      }
    if (action.type === DECREMENT_ADVANCE_VALUE) {
        return {
          ...state,
          advancePriceInput: action.payload,
        };
    }
    if (action.type === INCREMENT_GROUP_VALUE) {
        return {
          ...state,
          groupPriceInput: action.payload
        };
    }
    if (action.type === DECREMENT_GROUP_VALUE) {
        return {
          ...state,
          groupPriceInput: action.payload,
        };
    }
  if (action.type === SELECTED_TICKETS) {
    return {
      ...state,
      toggleNavigate:true,
      ticketToPay: [...state.ticketToPay, action.payload],
    };
  }
  if (action.type === HIDE_PAYMENT_PAGE) {
    return {
      ...state,
      toggleNavigate: false,
    }
  } 
    throw new Error(`no action of type ${action.type}`);
    
}

export default reducer;