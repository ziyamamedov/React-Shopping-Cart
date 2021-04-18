import { combineReducers } from "redux";
import * as types from "./action-types";

const initialProductsState = [
  { id: 1, name: "Phone", orderedQuan: 0 },
  { id: 2, name: "Car", orderedQuan: 0 },
  { id: 3, name: "Laptop", orderedQuan: 0 },
  { id: 4, name: "Computer", orderedQuan: 0 },
];

function productsReducer(products = initialProductsState, action) {
  switch (action.type) {
    case types.ADD_PROD:
      return [...products, action.payload];
    case types.DELETE_PROD:
      return products.filter((prod) => prod.id !== action.payload);
    case types.ADD_PR_QUAN:
      return products.map((prod) =>
        prod.id === action.payload
          ? { ...prod, orderedQuan: prod.orderedQuan + 1 }
          : prod
      );
    case types.REDUCE_PR_QUAN:
      return products.map((prod) =>
        prod.id === action.payload
          ? { ...prod, orderedQuan: prod.orderedQuan - 1 }
          : prod
      );
    default:
      return products;
  }
}

//Toggles add-new-product-form
function addNewProdReducer(state = false, action) {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  products: productsReducer,
  isFormActive: addNewProdReducer,
});

export default allReducers;
