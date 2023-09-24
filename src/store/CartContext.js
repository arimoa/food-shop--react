import { createContext, useReducer } from "react";
export const CartContext = createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  omitItem: (id) => {},
});
function cartReducer(state, action) {
  let index;
  let updatedArray = [];
  let updatedAmount;
  let updatedTotalPrice;
  if (action.type === "ADD") {
    updatedAmount = action.item.amount;

    if (state.items.length > 0) {
      index = state.items.findIndex((obj) => obj.id === action.item.id);
      if (index !== -1) {
        updatedArray = [...state.items];
        updatedArray[index].amount = updatedAmount;
        updatedTotalPrice = updatedArray.reduce((total, current) => {
          return total + current.price * current.amount;
        }, 0);
        return {
          items: updatedArray,
          totalPrice: updatedTotalPrice,
        };
      }
    }
    updatedArray = [...state.items, action.item];
    updatedTotalPrice = updatedArray.reduce((total, current) => {
      return total + current.price * current.amount;
    }, 0);
    return {
      items: updatedArray,
      totalPrice: updatedTotalPrice,
    };
  }
  if (action.type === "OMIT") {
    index = state.items.findIndex((obj) => obj.id === action.id);

    if (state.items[index].amount === 1) {
      updatedArray = state.items.filter((obj) => obj.id !== action.id);
      updatedTotalPrice = updatedArray.reduce((total, current) => {
        return total + current.price * current.amount;
      }, 0);
      return {
        items: updatedArray,
        totalPrice: updatedTotalPrice,
      };
    } else if (state.items[index].amount > 1) {
      updatedAmount = state.items[index].amount - 1;
      updatedArray = [...state.items];
      updatedArray[index].amount = updatedAmount;
      updatedTotalPrice = updatedArray.reduce((total, current) => {
        return total + current.price * current.amount;
      }, 0);
      return {
        items: updatedArray,
        totalPrice: updatedTotalPrice,
      };
    }
  }
  return cartInitial;
}
const cartInitial = {
  items: [],
  totalPrice: 0,
};
export const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitial);
  function addItemHandler(item) {
    cartDispatch({ type: "ADD", item });
  }
  function omitItemHandler(id) {
    cartDispatch({ type: "OMIT", id });
  }
  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    omitItem: omitItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
