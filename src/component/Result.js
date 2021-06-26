import { symlinkSync } from 'fs';
import React from 'react';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
const Result = props => {

    const { city, date, sunrise, sunset, temp, pressure, wind, weather, humidity, err} = props.weather;
    
    let content = null;

    if(!err && city) {
        
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        
        content = (
            
            
                 <div className= "app">
             <div className= "apk">
             
             
                
                <div className="location-box">
                    <div className="location">City: {city}</div>
                    <div className="date">Date: {date}</div>
                    </div>
                <div className="weather-box">
                    <div className="temp">{Math.round(temp)}°C</div>
                    <div className="weather">{weather}</div>
                    <div className="sunrise">Sunrise: {sunriseTime}</div>
                    <div className="sunset"> Sunset: {sunsetTime}</div>
                    <div className="wind">Wind: {wind} km/h</div>
                    <div className="pressure">Pressure: {pressure} hPa</div>
                    <div className="humidity">Humidity: {humidity}%</div>
                    </div>
                   
                </div>
                </div>
        
            
            
             
 
            
            
            
            
        )
    }

    return ( 
        <div className="result">
            {err ? `City ${city} didn't exist` : content}
        </div>
    );
}

export default Result;