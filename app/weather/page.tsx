"use client";
import React, { useState } from "react";
import WeatherCard from "../components/weatherCard";
import Footer from "../components/layout/footer";
import CustomButton from "../components/customButton";

const Weather = () => {
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleCityChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCity(event.target.value);
  };

  const SaveCustomer = async (event: React.FormEvent) => {
    try {
      console.log(city);
      const response = await fetch("/weather/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, email }),
      });
      setIsSent(true);
      console.log(city);
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }

      console.log(response.json);
      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-3 ">
      {isSent &&
        (isSuccess ? (
          <div className="mt-4 p-2 bg-green-100 rounded-lg">
            <p className="text-lg text-green-600">
              {email} has been registered to receive notifications on poor
              weather conditions in {city}
            </p>
          </div>
        ) : (
          <div className="mt-4 p-2 bg-red-100 rounded-lg">
            <p className="text-lg text-red-600">
              Something went wrong registering {email} with weather
              notifications set for {city}
            </p>
          </div>
        ))}
      <div>
        <div className="">
          <p className="text-3xl text-center md:text-left">
            Weather Tracker App
          </p>
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/3 p-2 mt-3 bg-white rounded-lg">
          <div>
            <p className="text-base w-full">Enter Email</p>
            <input
              className="w-full bg-slate-100 rounded-sm"
              value={email}
              title="customer email"
              placeholder="example@123.com"
              onChange={handleEmailChange}
            ></input>
          </div>
          <div className="mt-1">
            <p className="text-base w-full">Enter City</p>
            <input
              className="w-full  bg-slate-100 rounded-sm"
              value={city}
              title="customer city"
              placeholder="Tokyo"
              onChange={handleCityChange}
            ></input>
          </div>
          <div className="mt-2">
            <CustomButton title="Save" onClick={SaveCustomer} />
          </div>
        </div>
      </div>
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
