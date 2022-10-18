import React from "react";
import "./WeatherDetail.css";

export default function WeatherDetail(props) {
  const GetDay = (dt) => {
    return new Date(dt * 1000).toLocaleString("en-us", {
      weekday: "long",
    });
  };
  const FormatDate = (dt) => {
    dt = new Date(dt * 1000);
    return `${dt.getHours()}:${dt.getMinutes()} ${
      dt.getHours() > 12 ? "PM" : "AM"
    }`;
  };
  return (
    <div>
      {props.data && (
        <div>
          <h1 className="dayH1">{GetDay(props.data.dt)}</h1>
          <div className="detail">
            <div className="detailOfDay">
              <p className="detailRow">Sun and Moon</p>
              <p>Sunrise: {FormatDate(props.data.sunrise)}</p>
              <p>Sunset: {FormatDate(props.data.sunset)}</p>
              <p>Moonrise: {FormatDate(props.data.moonrise)}</p>
              <p>Moonset: {FormatDate(props.data.moonset)}</p>
            </div>
            <div className="detailOfDay">
              <p className="detailRow">Temperature</p>
              <p>
                Day: {props.data.temp.day}
                <sup>o</sup>
              </p>
              <p>
                Min: {props.data.temp.min}
                <sup>o</sup>
              </p>
              <p>
                Max: {props.data.temp.max}
                <sup>o</sup>
              </p>
              <p>
                Night: {props.data.temp.night}
                <sup>o</sup>
              </p>
            </div>
            <div className="detailOfDay">
              <p className="detailRow">Feels like</p>
              <p>
                Day: {props.data.feels_like.day}
                <sup>o</sup>
              </p>
              <p>
                Night: {props.data.feels_like.night}
                <sup>o</sup>
              </p>
              <p>
                Evening: {props.data.feels_like.eve}
                <sup>o</sup>
              </p>
              <p>
                Morning: {props.data.feels_like.morn}
                <sup>o</sup>
              </p>
            </div>
            <div className="detailOfDay">
              <p className="detailRow">Other</p>
              <p>
                Wind degrees: {props.data.wind_deg}
                <sup>o</sup>
              </p>
              <p>Wind speed: {props.data.wind_speed} m/s</p>
              <p>Cloud: {props.data.clouds}%</p>
              <p>UV: {props.data.uvi}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
