import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./Infobox.css"

export default function InfoBox({ info }) {
    let INIT_url = "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800";
    let SNOW_Url = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let SUMMER_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=2048x2048&w=is&k=20&c=VP4sgIBQaIcgxMDi-GrF0s2ASAHHymy3SHrcI2Gd6vQ=";
    let RAIN_URL = "https://media.istockphoto.com/id/2166330742/photo/mumbai-monsoon-man.webp?s=2048x2048&w=is&k=20&c=Ig7ptiCrrvBz9vlhBCGcytk3JzXISJcKlHq-Pe0CyEY=";


    return (
        <div className='Infobox'>
            <div className='cardContainer'>


                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={info.humidity > 80 ? RAIN_URL : info.tempMin > 30 ? SUMMER_URL : SNOW_Url}
                        title="City Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.tempMin > 30 ? <SunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                            <p> Temperature: {info.temp}&deg;C </p>
                            <p> Humidity: {info.humidity}%</p>
                            <p> Minimum Temperature: {info.tempMin}&deg;C</p>
                            <p> Maximum Temperature: {info.tempMax}&deg;C</p>
                            <p> pressure: {info.pressure}</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
