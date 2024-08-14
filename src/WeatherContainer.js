import React from 'react';
import { WeatherItem } from './WeatherItem';
import './WeatherContainer.css';

export const WeatherContainer = (props) => {
    const { weatherData } = props;

    console.log("weatherData ", weatherData);
    return (
        <div className="weather-container">

            { 
                weatherData.map((item) => {
                    const date = item.dt_txt
                    const temp = item.main.temp
                    const icon = item.weather[0].icon
                    const description = item.weather[0].description;

                    console.log('date ', date);
                    console.log('temp ', temp);
                    console.log('icon ', icon);
                    console.log('description ', description);

                    return (
                        <WeatherItem 
                            date={date}
                            temp={temp}
                            icon={icon}
                            description={description}
                        />
                    )

                })
            }
            
        </div>
    )
}