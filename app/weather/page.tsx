import React from "react";
import WeatherCard from "../components/weatherCard";
import Footer from "../components/layout/footer";

const Weather = () => {
  return (
    <div className="p-3">
      <div className="">
        <p className="text-3xl text-center md:text-left">Weather Tracker App</p>
      </div>
      {/* <div className="mt-3">
        <p className="text-base">Options: </p>
      </div> */}
      <div className="flex flex-wrap mt-3">
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
    </div>
  );
};

export default Weather;
