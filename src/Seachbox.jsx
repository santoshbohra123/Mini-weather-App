import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './Searchbox.css'

export default function SearchBox({ updateWeather }) {
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)

    let API_Key = "55d5a97fe33488e991c8159234dbfe46";
    let API_Url = "https://api.openweathermap.org/data/2.5/weather";

    let currentWeather = async () => {
        try {
            let response = await fetch(`${API_Url}?q=${city}&appid=${API_Key}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                feelslike: jsonResponse.main.feels_like,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleSubmit = async (evt) => {

        try {
            console.log(city);
            evt.preventDefault();
            setCity("");
            let result = await currentWeather();
            updateWeather(result);

        } catch (err) {
            setError(true);
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    return (
        <div className='Searchbox'>


            <form onSubmit={handleSubmit} action="">
                <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" value={city} name='city' />
                <br />
                <br />

                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {
                error && <p style={{ color: "red" }}>No such place exist.</p>
            }
        </div>
    )
}