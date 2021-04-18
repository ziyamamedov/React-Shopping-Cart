import { combineReducers } from "redux";

const initialProductsState = [
  { id: 1, name: "Phone", orderedQuan: 0 },
  { id: 2, name: "Car", orderedQuan: 0 },
  { id: 3, name: "Laptop", orderedQuan: 0 },
  { id: 4, name: "Computer", orderedQuan: 0 },
];

function productsReducer(state = initialProductsState, action) {
  switch (action.type) {
    case "ADD_PROD":
      return [...state, action.payload];
    default:
      return state;
  }
}

//Toggles add-new-product-form
function addNewProdReducer(state = false, action) {
  switch (action.type) {
    case "TOGGLE_FORM":
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
