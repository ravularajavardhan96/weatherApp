import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { textAlign } from '@mui/system';
let hot_Url = 'https://snowbrains.com/wp-content/uploads/2015/10/hot-summer-photo.jpg';

export default function WeatherInfo({weather}){
    return(
       <div>
          <Card sx={{ maxWidth: 345,marginTop:'2rem',padding:'0.5rem'}}>
      <CardMedia
        sx={{ height: 170 }}
        image={hot_Url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}> 
            {/* {console.log(weather)} */}
          {weather.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'div'}>
         <p>Temperature:{weather.temp}&deg;C</p>
         <p>Max Temp:{weather.Max_temp}&deg;C</p>
         <p>Min Temp:{weather.Min_temp}&deg;C</p>
         <p>Humidity:{weather.humidity}&deg;C</p>
         <p>The Weather can be described as <b>{weather.description}</b> and feels like {weather.feels_like}&deg;C.</p>
        </Typography>
      </CardContent>
    </Card>
       </div>
    )
}