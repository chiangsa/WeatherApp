import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
const API_KEY = "";

const WeatherGraph = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const city_names = ["New York", "San Francisco", "Atlanta", "Dallas", "Seattle"];
      
      const promises = city_names.map(
        async (id) =>
          await fetch(
            `https://api.weatherbit.io/v2.0/current?city=${id}&key=${API_KEY}`
          ).then((response) => response.json())
      );
      const weatherData = await Promise.all(promises);
      setWeatherData(weatherData);
    }
    fetchData();
  }, []);

  const data = {
    labels: weatherData.map((data) => data.data[0].city_name),
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.map((data) => data.data[0].temp)
      },
    ],
  };

  return (
    <div>
      <h2>Current Temperature of Popular Cities</h2>
      {weatherData.length > 0 ? (
        <Bar data={data} />
      ) : (
        <p></p>
      )}
    </div>
  );
  
};

export default WeatherGraph;
