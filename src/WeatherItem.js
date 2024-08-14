import React from 'react';
import './WeatherItem.css';

export const WeatherItem = (props) => {
    const { date, temp, icon, description } = props;

    return (
        <div className="weather-item">
            <p>Temp: {temp}</p>
            <p>Date: {date}</p>
            <p>Icon: {icon}</p>
            <p>Description: {description}</p>
        </div>
    )
}