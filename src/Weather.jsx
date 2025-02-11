import React, { useState } from "react";
import "./Weather.css";
import { WeatherBody } from "./WeatherBody";
import { days, months } from "./Constants";

const api = {
  key: "8020c088b79c9e4a95ba3582f2206a6c",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log("result:\n", result);
          setWeather(result);
          console.log("weather:\n", weather);
          setQuery("");
        });
    }
  };

  const dateBuilder = (value) => {
    let day = days[value.getDay()];
    let date = value.getDate();
    let month = months[value.getMonth()];
    let year = value.getFullYear();

    return `${day} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != undefined
          ? weather.main?.temp > 16
            ? "app warm"
            : "app"
          : app
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={search}
          />
        </div>
        <WeatherBody weather={weather} dateBuilder={dateBuilder} />
      </main>
    </div>
  );
};
