import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (cityName) => {
        try {
            const response = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=7f8c6b9c79d04ec590424006252704&q=${cityName}&aqi=no`
            );
            if(!response.ok) {
                throw new Error("Failed to fetch weather data");
            } 
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.log("Error Fetching weather", error);
            setWeatherData(null);
        }
    }


    return <WeatherContext.Provider value={{ city, setCity, weatherData, setWeatherData, fetchWeather }}>
        {children }
        </WeatherContext.Provider>;
}