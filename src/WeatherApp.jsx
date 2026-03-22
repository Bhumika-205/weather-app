import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelslike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze",
        weatherType: "Haze" 
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h1 style={{color: "lightblue"}}>Weather Info</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}