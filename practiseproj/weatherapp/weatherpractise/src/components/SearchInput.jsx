import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchInput = () => {
    const { city, setCity, fetchWeather } = useContext(WeatherContext);
    
    const handleSeach = () => {
        if(city.trim() !== ""){
            fetchWeather(city);
        }
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />

        <button onClick={handleSeach}>Search</button>
      </div>
    );
};

export default  SearchInput;