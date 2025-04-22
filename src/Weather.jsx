import { useState } from "react";
import CityInput from "../CityInput"
import WeatherInfo from "./WeatherInfo"

export default function Weather(){

    let [weatherInfo ,setWeatherInfo] = useState({
        city:"Hyderabad",
        feels_like:37,
        humidity:57,
        temp:39,
        Max_temp:34, 
        Min_temp:41,
        description:"Haze"
    })
    function handleData(){
        setWeatherInfo(city);
    }
    return(
     <div>
           <CityInput handleData={handleData}/>
           <WeatherInfo weather={weatherInfo}/>
     </div>
    )
}