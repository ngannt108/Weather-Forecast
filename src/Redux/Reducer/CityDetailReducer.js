import { useReducer } from "react";
function CityDetail(state, { type, payload }) {
  switch (type) {
    case "CITYDETAIL":
      return { ...state, detailCity: payload };
    default:
      return state;
  }
}

function Xyz() {
  return useReducer(CityDetail, null);
}

export default Xyz;
