export function addProd(name, id) {
  return { type: "ADD_PROD", payload: { id: id, name: name, orderedQuan: 0 } };
}

export function toggleForm() {
  return { type: "TOGGLE_FORM" };
}
