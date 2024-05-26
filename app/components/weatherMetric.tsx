import React from "react";
import { WeatherMetricsProps } from "../../../types";

const WeatherMetric = ({ title, metric, type }: WeatherMetricsProps) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center sm:justify-start">
      <p className="text-base">
        <span className="font-bold">{title}: </span> {metric} {type}
      </p>
    </div>
  );
};

export default WeatherMetric;
