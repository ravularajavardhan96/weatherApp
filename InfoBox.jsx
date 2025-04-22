import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
let hot_Url = 'https://snowbrains.com/wp-content/uploads/2015/10/hot-summer-photo.jpg';
let cold_Url = 'https://4.bp.blogspot.com/-joKYfFMa8qc/Uu9M0DPSGiI/AAAAAAAAB4A/3icn4_pGZvQ/s1600/06.jpg';
let rainy_img = 'https://www.wellahealth.com/blog/wp-content/uploads/2021/09/6-ways-to-stay-healthy-during-the-rainy-season.jpg';

export default function InfoBox({info}){

    return(
        <div>
           <Card sx={{ maxWidth: 345,marginTop:'2rem',padding:'0.5rem',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}>
       <CardMedia
         sx={{ height: 170 }}
         image={info.humidity > 80?rainy_img : info.temp>20 ? hot_Url : cold_Url}
         title="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
           {info.city.toUpperCase() } &nbsp;{info.humidity > 80?<ThunderstormIcon style={{marginTop:'0.5rem'}}/> : info.temp>20 ? <SunnyIcon style={{marginTop:'0.5rem'}}/>  : <AcUnitIcon style={{marginTop:'0.5rem'}}/>}
         </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'div'}>
          <p>Temperature:&nbsp;{info.temp}&deg;C</p>
          <p>Max Temp:&nbsp;{info.temp_max}&deg;C</p>
          <p>Min Temp:&nbsp;{info.temp_min}&deg;C</p>
          <p>Humidity:&nbsp;{info.humidity}</p>
          <p>The Weather can be described as <b>{info.description}</b> and feels like {info.feels_like}&deg;C.</p>
         </Typography>
       </CardContent>
     </Card>
        </div>
     )
}