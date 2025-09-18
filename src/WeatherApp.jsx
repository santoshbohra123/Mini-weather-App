import Searchbox from "./Seachbox.jsx"
import Infobox from "./InfoBox.jsx"
import { useState } from "react";

export default function WeatherApp({ info }) {
    let [weather, setWeather] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
        pressure : 1008,
    })

    let updateWeather = (result) => {
        setWeather(result)
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h2> Weather App By Santosh</h2>
            <Searchbox updateWeather={updateWeather} />
            <Infobox info={weather} />
        </div>
    )
}