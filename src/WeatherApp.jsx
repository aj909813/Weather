import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div  className="body" style={{textAlign:"center"}}>
            <h3><i>Search for weather</i></h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}