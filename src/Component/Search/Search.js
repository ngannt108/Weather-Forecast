import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Redux/Store/Store";
import "./Search.css";
import SearchResult from "./SearchResult/SearchResult";

export default function Search() {
  const store = useContext(StoreContext);
  const [keySearch, setKeySearch] = useState(null);
  const CheckEnter = (event) => {
    if (event.key === "Enter") {
      setKeySearch(event.target.value);
    }
  };
  useEffect(() => {
    if (keySearch) {
      const keyAppID = "439d4b804bc8187953eb36d2a8c26a02";
      fetch(
        `https://openweathermap.org/data/2.5/find?q=${keySearch}&appid=${keyAppID}`
      )
        .then((res) => res.json())
        .then((dt) =>
          store.SearchDispatch({
            type: "SEARCH",
            payload: dt.list,
          })
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keySearch]);

  return (
    <div className="search">
      {console.log(store)}
      <input placeholder="Search..." onKeyUp={(event) => CheckEnter(event)} />
      <p>Enter to search.</p>
      <div className="result">
        {store.lsSearch.lsCity?.map((n, i) => {
          return (
            <div key={i}>
              <SearchResult lsSearchCity={n} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
