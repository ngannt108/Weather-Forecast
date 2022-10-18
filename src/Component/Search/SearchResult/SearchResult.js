import React, { useContext } from "react";
import { StoreContext } from "../../../Redux/Store/Store";
import "./SearchResult.css";

export default function SearchResult(props) {
  const store = useContext(StoreContext);
  return (
    <div
      className="city"
      onClick={() =>
        store.DetailDispatch({
          type: "CITYDETAIL",
          payload: {
            lat: props.lsSearchCity.coord.lat,
            lon: props.lsSearchCity.coord.lon,
            name: props.lsSearchCity.name,
          },
        })
      }
    >
      <div className="row cityName">
        <img
          src={`https://openweathermap.org/images/flags/${props.lsSearchCity.sys.country.toLowerCase()}.png`}
          alt=""
          height="15px"
          width="20px"
        />
        <p>{props.lsSearchCity.name}</p>
      </div>
      <div className="row temperature">
        <span className="tempAvg">
          {(props.lsSearchCity.main.temp * 1 - 273.15).toFixed(2)}
          <sup>o</sup>C{" "}
        </span>
        <span>
          temperature from{" "}
          {(props.lsSearchCity.main.temp_min * 1 - 273.15).toFixed(2)}
          <sup>o</sup>C to{" "}
          {(props.lsSearchCity.main.temp_max * 1 - 273.15).toFixed(2)}
          <sup>o</sup>C
        </span>
      </div>
      <div className="row windCloud">
        <span>
          Wind {props.lsSearchCity.wind.speed} m/s. Cloud{" "}
          {props.lsSearchCity.clouds.all}%
        </span>
      </div>
      <div className="row geoCoords">
        <span>
          Geo coords [{props.lsSearchCity.coord.lat},
          {props.lsSearchCity.coord.lon}]
        </span>
      </div>
    </div>
  );
}
