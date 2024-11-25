import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./infobox.css";
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1640955788205-46267ab3b3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=956PGzmeuwcAxXARRp8qp99MeVAMZIhAzi5WxGb_ki0=";
    return(
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80 ? <ThunderstormIcon/> : 
          info.temp > 15 ?  <WbSunnyIcon/> : 
          <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p> Max Temp = {info.tempMax}&deg;C</p>
          <p> The weather can be describe as <i> {info.weather} </i> and feels like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
};