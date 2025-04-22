import { useState } from "react"
import Searchbox from "./SearchBox"
import InfoBox from "./infoBox"
export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo]=useState({ city:"Pune",
        feels_like:32,
        humidity:46,
        temp:37,
        temp_max:39, 
        temp_min:36,
        description:"Haze"})

        let updateInfo =(result)=>{
            setWeatherInfo(result);
        }
    return(
        <div>
             <Searchbox updateInfo={updateInfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}