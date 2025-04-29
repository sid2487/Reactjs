import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherCard = () => {
    const { weatherData } = useContext(WeatherContext);

    if(!weatherData) return <p>No data to display. Search for a city!</p>

    const { name, country } = weatherData.location;
    const { temp_c, condition } = weatherData.current;

    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          width: "250px",
          margin: "10px auto",

          // backgroundColor: "",
        }}
      >
        <h2>
          {name}, {country}
        </h2>
        <img src={condition.icon} alt={condition.text} />
        <h3>{temp_c}</h3>
        <p>{condition.text}</p>
      </div>
    );
};

export default WeatherCard;

