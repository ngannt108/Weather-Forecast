import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Redux/Store/Store";
import "./Content.css";
import Daily from "./Daily/Daily";
import WeatherDetail from "./WeatherDetail/WeatherDetail";

export default function Content() {
  const store = useContext(StoreContext);
  const [detailCity, setDetail] = useState(null);
  const [weatherDetail, setWeatherDetail] = useState(null);
  useEffect(() => {
    const keyAppID = "439d4b804bc8187953eb36d2a8c26a02";
    if (store.detail) {
      fetch(
        `https://openweathermap.org/data/2.5/onecall?lat=${store.detail.detailCity.lat}&lon=${store.detail.detailCity.lon}&appid=${keyAppID}`
      )
        .then((res) => res.json())
        .then((dt) => {
          setDetail(dt);
          setWeatherDetail(null);
        });
    }
  }, [store.detail]);
  const FormatDate = (dt) => {
    dt = new Date(dt * 1000);
    return `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${
      dt.getHours() > 12 ? "PM" : "AM"
    }`;
  };
  const FormatDDMMYY = (dt) => {
    dt = new Date(dt * 1000);
    return (
      dt.toLocaleString("en-us", {
        weekday: "long",
      }) +
      ", " +
      dt.toLocaleString("en-us", {
        month: "long",
      }) +
      " " +
      dt.getDate() +
      ", " +
      dt.getFullYear()
    );
  };

  const GetDetailOfDay = (data) => {
    setWeatherDetail(data);
  };
  return (
    detailCity && (
      <div className="content">
        <div>
          <h1>{FormatDate(detailCity.current.dt)}</h1>
          <p>{FormatDDMMYY(detailCity.current.dt)}</p>
          <p className="welcomeCity">
            Welcome to {store.detail.detailCity.name} city.
          </p>
        </div>
        <div className="dailyResult">
          {detailCity.daily.map((day, i) => (
            <div key={i}>
              <Daily day={day} HandleClick={GetDetailOfDay} />
            </div>
          ))}
        </div>
        <hr />
        <div>
          <WeatherDetail data={weatherDetail} />
        </div>
      </div>
    )
  );
}
