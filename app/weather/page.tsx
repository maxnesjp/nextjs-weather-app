import React from "react";
import WeatherCard from "../components/weatherCard";

const Weather = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 xl:w-1/3 p-2">
        <WeatherCard defaultCity="Tokyo" />
      </div>
      <div className="w-full sm:w-1/2 xl:w-1/3 p-2">
        <WeatherCard defaultCity="Moscow" />
      </div>
      <div className="w-full sm:w-1/2 xl:w-1/3 p-2">
        <WeatherCard defaultCity="Phuket" />
      </div>
    </div>
  );
};

export default Weather;
