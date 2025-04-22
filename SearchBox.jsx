import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
export default function Searchbox({updateInfo}){
    let [city,setCity] = useState("");
    let [err,setErr] = useState(false);

    function handleChange(event){
        setCity(event.target.value);
    }
    async function handleSubmit(event){
      try{
        event.preventDefault();
        let res = await fetchData();
        updateInfo(res);
         setCity("");
         setErr(false);
      }
      catch(err){
        setCity("");
        setErr(true);
      }
    }
    
    async function fetchData(){
        let API_KEY ='ca1a6c57ce1565ed7d7b00e8872bbb7e';
       try{
        let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResp =await resp.json();
        let result = {
            city:city,
            feels_like:jsonResp.main.feels_like,
            humidity:jsonResp.main.humidity,
            temp:jsonResp.main.temp,
            temp_max:jsonResp.main.temp_max, 
            temp_min:jsonResp.main.temp_min,
            description:jsonResp.weather[0].description
           
        }
        return result;
       }catch(err){
        throw err;
       }
       
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

                 {err && <p style={{color:'red'}}>Such place does not exist in our API!!</p>}
    
                 </form>
            </div>
        )
}