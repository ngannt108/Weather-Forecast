import React, { createContext } from "react";
import SearchReducer from "../Reducer/SearchReducer";
import CityDetailReducer from "../Reducer/CityDetailReducer";

export const StoreContext = createContext(null);
const Store = ({ children }) => {
  const [lsCity, Dispatch] = SearchReducer();
  const [detailCity, DispatchCityDetail] = CityDetailReducer();
  const store = {
    lsSearch: lsCity,
    SearchDispatch: Dispatch,
    detail: detailCity,
    DetailDispatch: DispatchCityDetail,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
