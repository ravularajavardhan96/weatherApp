import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function CityInput({handleData}){  
let [city,setCity] = useState("");

function handleChange(event){
    setCity(event.target.value);
}
async function handleSubmit(event){
    console.log(city);
   await  handleData(city);
    event.preventDefault();
    fetchData();

    setCity("");
}

async function fetchData(){
    let API_KEY ='ca1a6c57ce1565ed7d7b00e8872bbb7e';
    let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResp =await resp.json();
    // console.log(jsonResp);
    let result = {
        city:city,
        feels_like:jsonResp.main.feels_like,
        humidity:jsonResp.main.humidity,
        temp:jsonResp.main.temp,
        Max_temp:jsonResp.main.temp_max, 
        Min_temp:jsonResp.main.temp_min,
        description:jsonResp.weather[0].description
    }
    console.log(result);
}


    return(
        
        <div style={{alignSelf:"center"}}>
            <h2 style={{textAlign:"center"}} >Search for Weather</h2>
             <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
             <TextField
             required
             id="outlined-required"
             label="City name"
             onChange={handleChange}
             value={city}
             />
             <br /><br />
             <Button variant="contained" type='submit'>Get Weather</Button>
              

             </form>
        </div>
    )
}