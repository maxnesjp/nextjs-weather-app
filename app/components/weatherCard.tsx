"use client";
import React, { useEffect, useState } from "react";
import { WeatherCardProps, WeatherResponse } from "@/types";
import WeatherMetric from "./weatherMetric";
import { cities, sampleData } from "@/constants";
import CustomCombobox from "./customCombobox";
import CustomButton from "./customButton";

// Define a default object for weatherData if it is null
const defaultWeatherData: WeatherResponse = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    last_updated_epoch: 0,
    last_updated: "",
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: "",
      icon: "",
      code: 0,
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: "",
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
  },
};

const WeatherCard = ({ defaultCity }: WeatherCardProps) => {
  const [city, setCity] = useState<string>(defaultCity);
  const [weatherData, setWeatherData] =
    useState<WeatherResponse>(defaultWeatherData);

  useEffect(() => {
    fetchData(city);
  }, []);

  const fetchData = async (city: string) => {
    try {
      const response = await fetch(`/weather/api?city=${city}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(defaultWeatherData); // Reset or handle state accordingly on error
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData(city);
  };

  const onCitySelectChange = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <>
      <div className="bg-white rounded-lg p-4 shadow-md text-black">
        <div className="flex flex-col sm:flex-row  mb-4">
          <div className="basis-full sm:basis-1/2 h-10 mb-1 mr-0 sm:mr-1 sm:mb-0 ">
            <CustomCombobox
              options={cities}
              onChange={onCitySelectChange}
              selected={city || city[0]}
            ></CustomCombobox>
          </div>
          <div className="basis-full sm:basis-1/2 mt-0 h-10">
            <CustomButton
              onClick={handleSubmit}
              title="Get Weather"
            ></CustomButton>
          </div>
        </div>
        <div className="bg-white">
          <h2 className="text-xl font-bold mb-1 sm:mb-3 text-center md:text-left">
            Weather in {weatherData.location.name}
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <p className="text-lg sm: mb-1">
                {weatherData.current.condition.text}
              </p>
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt="Weather icon"
                className="w-20 h-20"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <p className="text-6xl sm:text-4xl font-bold ">
                {weatherData.current.temp_c}°C
              </p>
              <p className=" text-gray-600 text-base sm:text-1xl">
                Feels like {weatherData.current.feelslike_c}°C
              </p>
            </div>
          </div>
          <div className="mt-2 sm:mt-4 flex flex-wrap">
            <WeatherMetric
              title="Wind"
              metric={weatherData.current.wind_kph}
              type="km/h"
            />
            <WeatherMetric
              title="Pressure"
              metric={weatherData.current.pressure_mb}
              type="mb"
            />
            <WeatherMetric
              title="Humidity"
              metric={weatherData.current.humidity}
              type="%"
            />
            <WeatherMetric
              title="UV Index"
              metric={weatherData.current.uv}
              type="km/h"
            />
            <WeatherMetric
              title="Cloud Cover"
              metric={weatherData.current.cloud}
              type="%"
            />
            <WeatherMetric
              title="Visibility"
              metric={weatherData.current.vis_km}
              type="km"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
