import { useReducer } from "react";
function SearchCity(state, { type, payload }) {
  switch (type) {
    case "SEARCH":
      return { ...state, lsCity: payload };
    default:
      return state;
  }
}
function Abc() {
  return useReducer(SearchCity, []);
}

export default Abc;
