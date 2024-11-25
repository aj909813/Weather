import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "30b690bd8acc75d5ad28ddb098ee8302";

    let getWeatherInfo = async () => {
       try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

       let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_Like,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
     } catch(err)
     {
        throw err;
        
     }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    
    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
            console.log(err);
        }
        
    };

    return(
        <div className="SearchBox">
              

              <form onClick={handleSubmit}>
              <TextField 
              id="city" 
              label="City Name" 
              variant="outlined" 
              value={city} 
              onChange={handleChange} 
              required/>
              <br/><br/>

              <Button 
              variant="contained" 
              type="submit">Search</Button>
              {/* {error && <p style={{color:"red"}}>No such place exits in our data</p>} */}
              </form>
              
        </div>
    )
 }