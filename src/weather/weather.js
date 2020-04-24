import React from "react";
import '../weather/weather.css'

const Weather = (props) => {
    let state = {
        temperature: props.state.temperature,
        humidity: props.state.humidity,
        city: props.state.city,
        country: props.state.country,
        description: props.state.description,
        weatherIcon: props.state.weatherIcon,
        sunset: props.state.sunset,
        sunrise: props.state.sunrise,
        speed: props.state.speed,
        error: props.state.error,
        notFoundCode: props.state.notFoundCode,
        notFoundMessage: props.state.notFoundMessage,
    }
    return (
        <div>
            <div>
                {state.city && state.country &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Город:</span>
                    <span>{state.city}, {state.country}</span>
                </div>}
                {state.temperature &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Температура:</span>
                    <span>{state.temperature} °C</span>
                </div>}
                {state.humidity &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Влажность:</span>
                    <span>{state.humidity} %</span>
                </div>}
                {state.speed &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Скорость ветра:</span>
                    <span>{state.speed} м/с</span>
                </div>}
                {state.sunrise &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Восход:</span>
                    <span>{state.sunrise}</span></div>}
                {state.sunset &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Закат:</span>
                    <span>{state.sunset}</span>
                </div>}
                {state.notFoundCode &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span> </span>
                    <span>{state.notFoundCode}</span>
                </div>}
                {state.notFoundMessage &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span> </span>
                    <span>{state.notFoundMessage}</span>
                </div>}
                {state.error &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span><div>{state.error}</div></span>
                </div>}
            </div>
            <div>
                {state.weatherIcon &&
                <div className='d-flex justify-content-between weather-padding'>
                    <span>Статус:</span>
                    <span>
                    <img
                        src={'https://openweathermap.org/img/w/' + state.weatherIcon + '.png'}
                        alt={state.description}/>
                </span>
                </div>}
            </div>
        </div>
    )
};

export default Weather;