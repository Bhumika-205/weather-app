import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css";

export default function InfoBox({info}){

    const getWeatherImage = (weatherType) => {
        if(weatherType === "Clear") return "/images/sun.png";
        if(weatherType === "Clouds") return "/images/cloud.png";
        if(weatherType === "Rain" || weatherType === "Drizzle") return "/images/rain.png";
        if(weatherType === "Thunderstorm") return "/images/thunderstorm.png";
        if(weatherType === "Snow") return "/images/snow.png";

        return "/images/cloud.png"; 
    };

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={getWeatherImage(info.weatherType)}
                        alt="weather img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                                <div>Temperature = {info.temp}&deg;C</div>
                                <div>Humidity = {info.humidity}</div>
                                <div>Min Temp = {info.tempMin}&deg;C</div>
                                <div>Max Temp = {info.tempMax}&deg;C</div>
                                <div>The weather described as  <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}