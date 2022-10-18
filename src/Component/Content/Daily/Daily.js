import React from "react";
import "./Daily.css";

export default function Daily(props) {
  const FormatDay = (dt) => {
    return new Date(dt * 1000).toLocaleString("en-us", {
      weekday: "short",
    });
  };
  return (
    <div
      className="daily"
      onClick={() => {
        props.HandleClick(props.day);
      }}
    >
      <img
        alt=""
        src={`https://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
      />
      <p className="day">{FormatDay(props.day.dt)}</p>
      <p>
        {props.day.temp.day}
        <sup>o</sup>
      </p>
    </div>
  );
}
