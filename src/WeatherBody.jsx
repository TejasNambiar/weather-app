import React from "react";

export const WeatherBody = ({ weather, dateBuilder }) => {
  return (
    <div>
      {typeof weather.sys == undefined || weather.sys == undefined ? (
        <div></div>
      ) : (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys?.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main?.temp)}°C</div>
            <div className="weather">{weather.weather[0]?.main}°C</div>
          </div>
        </div>
      )}
    </div>
  );
};
