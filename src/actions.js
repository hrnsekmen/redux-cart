export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

// CART ITEM ACTIONS

export const removeItem = (id) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};

export const increase = (id) => {
  return {
    type: INCREASE,
    payload: { id },
  };
};

export const decrease = (id, amount) => {
  return {
    type: INCREASE,
    payload: { id, amount },
  };
};

// CART CONTAINER ACTIONS

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const getTotals = () => {
  return {
    type: GET_TOTALS,
  };
};
