import React, { useState } from "react";
import './Search.css';

export const Search = (props) => {
    const { getWeather } = props;

    const [cityName, setCityName] = useState('');

    const handleInputChange = (event) => {
        setCityName(event.target.value);
    }

    const handleSubmit = (event) => {   
        event.preventDefault();

        getWeather(cityName);

        setCityName('');
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="text" value={cityName} onChange={handleInputChange} />
                <div className="search-form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};