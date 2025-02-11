import React, { useState } from "react";

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
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Novemeber",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[value.getDay()];
    let date = value.getDate();
    let month = months[value.getMonth()];
    let year = value.getFullYear();

    return `${day} ${month} ${year}`;
  };
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys?.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        </div>
      </main>
    </div>
  );
};
