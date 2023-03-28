import React, { useEffect, useState } from "react";
const API_KEY = ""

const WeatherInfo = () => {
    const [city, setCity] = useState("Raleigh");
    const [weatherData, setWeatherData] = useState(null);
    const [cityInput, setCityInput] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [filterBy, setFilterBy] = useState("all");

    useEffect(() => {
        const getWeatherInfo = async () => {
            const response = await fetch(
                `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
            );
            const data = await response.json();
            setWeatherData(data);
        };
        getWeatherInfo().catch(console.error);
    }, [city]);

    const keyValueList = [
        { key: "datetime", value: "Date-Time" },
        { key: "aqi", value: "Air Quality Index" },
        { key: "app_temp", value: "Temperature Celsius" },
        { key: "precip", value: "Precipitation" },
        { key: "sunrise", value: "Sunrise" },
        { key: "sunset", value: "Sunset" },
        { key: "uv", value: "UV Rating" },
        { key: "wind_cdir", value: "Wind Direction" },
        { key: "country_code", value: "Country Code" },
        { key: "dewpt", value: "Dew Point" },
        { key: "dhi", value: "Diffuse Horizontal Irradiance" },
        { key: "dni", value: "Direct Normal Irradiance" },
        { key: "elev_angle", value: "Elevation Angle" },
        { key: "ghi", value: "Global Horizontal Irradiance" },
        { key: "lat", value: "Latitude" },
        { key: "lon", value: "Longitude" },
        { key: "pres", value: "Pressure" },
        { key: "rh", value: "Relative Humidity" },
        { key: "slp", value: "Sea Level Pressure" },
        { key: "snow", value: "Snow" },
        { key: "solar_rad", value: "Solar Radiance" },
        { key: "station", value: "Station" },
        { key: "vis", value: "Visibility" }
    ];

    const allFields = [
        "date-time",
        "air quality index",
        "temperature celsius",
        "precipitation",
        "sunrise",
        "sunset",
        "uv rating",
        "wind direction",
        "country code",
        "dew point",
        "diffuse horizontal irradiance",
        "direct normal irradiance",
        "elevation angle",
        "global horizontal irradiance",
        "latitude",
        "longitude",
        "pressure",
        "relative humidity",
        "sea level pressure",
        "snow",
        "solar radiance",
        "station",
        "visibility"
      ];
      
      const weatherFields = [
        "air quality index",
        "temperature celsius",
        "precipitation",
        "uv rating",
        "wind direction",
        "dew point",
        "relative humidity",
        "pressure",
        "sea level pressure",
        "snow",
        "solar radiance",
        "visibility"
      ];
      

    const handleCityChange = (event) => {
        setCityInput(event.target.value);
    };

    const handleSearch = () => {
        setCity(cityInput);
    };

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchInputAll = () => {
        setFilterBy("all");
    };

    const handleSearchInputWeather = () => {
        setFilterBy("weather");
    };

    const filteredKeyValueList = keyValueList.filter(({ value }) => {
        const searchValue = value.toLowerCase();
        const searchInputLower = searchInput.toLowerCase();
      
        if (filterBy === "all") {
            return allFields.includes(searchValue) && searchValue.includes(searchInputLower);
        } else if (filterBy === "weather") {
            return weatherFields.includes(searchValue) && searchValue.includes(searchInputLower);
        }
    });

    return (
        <div className="box">
            <div className="statistics">
                <div className="stat">
                    <h4>Temperature °C</h4>
                    {weatherData ? <p>{weatherData.data[0].app_temp}</p> : null}
                </div>
                <div className="stat">
                    <h4>Air Quality Index</h4>
                    {weatherData ? <p>{weatherData.data[0].aqi}</p> : null}
                </div>
                <div className="stat">
                    <h4>Clouds </h4>
                    {weatherData ? <p>{weatherData.data[0].clouds}</p> : null}
                </div>
            </div>
            <div>
                <h2>Weather Info, {city}</h2>
            </div>
            <div>
                <input type="text" placeholder="Enter city name" onChange={handleCityChange} />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div>
                <input type="text" placeholder="Search values" onChange={handleSearchInput} />
            </div>
            <div>
                Filter By:
            </div>
            <div>
                <button onClick={handleSearchInputAll}>All</button>
                <button onClick={handleSearchInputWeather}>Weather: </button>
            </div>
            <div className="bk1">
                {weatherData ? (
                    <>
                        {filteredKeyValueList.map(({ key, value }) => (
                            <p key={key}>
                                ({value}): {weatherData.data[0][key]}
                            </p>
                        ))}
                    </>
                ) : null}
            </div>
        </div>
    );
};


export default WeatherInfo;
