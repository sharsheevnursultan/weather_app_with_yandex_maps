import React from "react";
import Form from "./form/form";
import Weather from "./weather/weather";
import './App.css'
import {YMaps, Map} from 'react-yandex-maps';
import Header from "./header/Header";

const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=abacceaec861b12e6d69c3f60c510584";
const LANGUAGE = "&lang=ru"
const UNITS = "&units=metric"

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        weatherIcon: undefined,
        sunset: undefined,
        sunrise: undefined,
        error: undefined,
        notFoundCode: undefined,
        notFoundMessage: undefined,
        coord_lat: undefined,
        coord_lon: undefined
    };
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        try {
            const api_call = await fetch(`${URL}${city}${API_KEY}${LANGUAGE}${UNITS}`);
            const weatherData = await api_call.json();
            console.log(weatherData);
            console.log(weatherData.name);
            console.log(weatherData.cod);
            if (city) {
                let sunset = weatherData.sys.sunset * 1000;
                let date = new Date();
                date.setTime(sunset);
                let sunsetDate = date.getHours() + ':' + date.getMinutes();
                let sunrise = weatherData.sys.sunrise * 1000;
                let date2 = new Date();
                date2.setTime(sunrise);
                let sunriseDate = date2.getHours() + ':' + date2.getMinutes();
                this.setState({
                    temperature: weatherData.main.temp,
                    city: weatherData.name,
                    country: weatherData.sys.country,
                    humidity: weatherData.main.humidity,
                    speed: weatherData.wind.speed,
                    description: weatherData.weather[0].description,
                    weatherIcon: weatherData.weather[0].icon,
                    sunset: sunsetDate,
                    sunrise: sunriseDate,
                    error: undefined,
                    notFoundCode: undefined,
                    notFoundMessage: undefined,
                    coord_lat: weatherData.coord.lat,
                    coord_lon: weatherData.coord.lon
                });
            } else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    speed: undefined,
                    description: undefined,
                    weatherIcon: undefined,
                    sunset: undefined,
                    sunrise: undefined,
                    error: "Введите имя города",
                    notFoundCode: undefined,
                    notFoundMessage: undefined,
                    coord_lat: undefined,
                    coord_lon: undefined

                });
            }
        } catch {
            const api_call = await fetch(`${URL}${city}${API_KEY}${LANGUAGE}${UNITS}`);
            const weatherData = await api_call.json();
            console.log(weatherData);
            console.log(weatherData.name);
            if (city) {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    speed: undefined,
                    description: undefined,
                    weatherIcon: undefined,
                    sunset: undefined,
                    sunrise: undefined,
                    error: 'Неверное имя города',
                    notFoundCode: weatherData.cod,
                    notFoundMessage: weatherData.message
                });
            } else {
                this.setState({
                    notFoundCode: undefined,
                    error: "Введите имя города",
                    notFoundMessage: undefined
                });
            }
        }
    };

    render() {
        return (
            <div id='color_toggle' className='bg-color'>
                <div className='card-holder'>
                    <Header/>
                    <div className='row'>
                        <div className='col-md-6 '>
                            <div id='color_toggle3' className='left-col-bg cols-height'>
                                <Form getWeather={this.getWeather}/>
                                <Weather state={this.state}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div id='color_toggle5' className='left-col-bg cols-height'>
                                <YMaps>
                                    <Map className='ymaps-size'
                                         state={{
                                             center: [this.state.coord_lat, this.state.coord_lon],
                                             zoom: 9,
                                             controls: ['zoomControl', 'fullscreenControl'],
                                         }}
                                         modules={['control.ZoomControl', 'control.FullscreenControl']}
                                    />
                                </YMaps>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
