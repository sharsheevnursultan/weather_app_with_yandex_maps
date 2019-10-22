import React from "react";
import '../weather/weather.css'

const Weather = (props) => (
    <div>
        <div>
            {props.city && props.country &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    City:
                </span>
                <span>{props.city}, {props.country}</span>
            </div>}

            {props.temperature &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Temp:
                </span>
                <span>{props.temperature} °C</span>
            </div>}
            {props.humidity &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Humidity:
                </span>
                <span>{props.humidity} %</span>
            </div>}
            {props.speed &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Wind speed:
                </span>
                <span>{props.speed} m/s</span>
            </div>}
            {props.sunrise &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                     Sunrise:
                </span>
                <span>{props.sunrise}</span></div>}
            {props.sunset &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    Sunset:
                </span>
                <span>{props.sunset}</span></div>}
            {props.notFoundCode &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                </span>
                <span>{props.notFoundCode}</span>
            </div>}
            {props.notFoundMessage &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>

                </span>
                <span>{props.notFoundMessage}</span>
            </div>}
            {props.error &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>
                    <div>{props.error}</div>
                </span>
            </div>}
        </div>
        <div>
            {props.weatherIcon &&
            <div className='d-flex justify-content-between weather-padding'>
                <span>

                </span>
                <span>
                    <img
                        src={'http://openweathermap.org/img/w/' + props.weatherIcon + '.png'}
                        alt={props.description}/>
                </span>
            </div>}
        </div>
    </div>
);

export default Weather;