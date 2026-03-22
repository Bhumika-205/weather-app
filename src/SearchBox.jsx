import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json()

            if (jsonResponse.cod === '404'){
                throw new Error("City not found!");
            }

            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
                weatherType: jsonResponse.weather[0].main
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();

        if(city.trim() === ""){
            setError("empty");
            return;
        }
        
        try{
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError("");
            setCity("");
        }catch(err){
            setError("Not Found");
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" size='small' value={city} onChange={handleChange}/>
                &nbsp;&nbsp;
                <Button className="SearchButton" variant="contained" type='submit'>Search</Button>

                {error=="empty" && (<Alert severity="warning">Please enter a city name!</Alert>)}
                {error=="Not Found" && (<Alert severity="error">No such place exists!</Alert>)}
                

            </form>
        </div>
    )
}