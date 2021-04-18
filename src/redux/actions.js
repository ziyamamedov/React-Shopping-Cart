import * as types from "./action-types";

export function addProd(name, id) {
  return {
    type: types.ADD_PROD,
    payload: { id: id, name: name, orderedQuan: 0 },
  };
}

export function deleteProd(id) {
  return { type: types.DELETE_PROD, payload: id };
}

export function toggleForm() {
  return { type: types.TOGGLE_FORM };
}
