import React from "react";
import Form from "./form/form";
import Weather from "./weather/weather";
import './App.css'
import {YMaps, Map} from 'react-yandex-maps';


const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=abacceaec861b12e6d69c3f60c510584";

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
            const api_call = await fetch(`${URL}+${city}+${API_KEY}&units=metric`);
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
                    error: "Enter city name",
                    notFoundCode: undefined,
                    notFoundMessage: undefined,
                    coord_lat: undefined,
                    coord_lon: undefined

                });
            }

        } catch {
            const api_call = await fetch(`${URL}+${city}+${API_KEY}&units=metric`);
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
                    error: 'Invalid city name',
                    notFoundCode: weatherData.cod,
                    notFoundMessage: weatherData.message
                });
            } else {
                this.setState({
                    notFoundCode: undefined,
                    error: "Enter city name",
                    notFoundMessage: undefined
                });
            }
        }
    };


    render() {
        let myTumbler = (elem, elem2, elem3, elem4, elem5) => {

                elem = document.getElementById('color_toggle');
                if (elem.classList.contains('bg-color')) {
                    elem.classList.replace('bg-color', 'black-bg-color-without-border')
                } else if (elem.classList.contains('black-bg-color-without-border')) {
                    elem.classList.replace('black-bg-color-without-border', 'bg-color')
                }


                elem2 = document.getElementById('color_toggle2');
                if (elem2.classList.contains('main-top-app-name')) {
                    elem2.classList.replace('main-top-app-name', 'app-name-black-bg-color');
                } else if (elem2.classList.contains('app-name-black-bg-color')) {
                    elem2.classList.replace('app-name-black-bg-color', 'main-top-app-name');
                }


                elem3 = document.getElementById('color_toggle3');
                if (elem3.classList.contains('left-col-bg')) {
                    elem3.classList.replace('left-col-bg', 'black-bg-color');
                } else if (elem3.classList.contains('black-bg-color')) {
                    elem3.classList.replace('black-bg-color', 'left-col-bg');
                }


                elem4 = document.getElementById('color_toggle4');
                if (elem4.classList.contains('yin-yang-tumbler')) {
                    elem4.classList.replace('yin-yang-tumbler', 'white-yin-yang-tumbler');
                } else if (elem4.classList.contains('white-yin-yang-tumbler')) {
                    elem4.classList.replace('white-yin-yang-tumbler', 'yin-yang-tumbler');
                }


                elem5 = document.getElementById('color_toggle5');
                if (elem5.classList.contains('left-col-bg')) {
                    elem5.classList.replace('left-col-bg', 'black-bg-color');
                } else if (elem5.classList.contains('black-bg-color')) {
                    elem5.classList.replace('black-bg-color', 'left-col-bg');
                }
            }
        ;

        return (
            <div id='color_toggle' className='bg-color'>
                <div className='card-holder'>
                    <h1 id='color_toggle2' className='card main-top-app-name'>Weather App
                        <span onClick={myTumbler} title='Night mode'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="yin-yang"
                                 className="yin-yang-tumbler" role="img" id='color_toggle4'
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path
                                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
                            </svg></span>
                    </h1>
                    <div className='row'>
                        <div className='col-md-6 '>
                            <div id='color_toggle3' className='left-col-bg cols-height'>

                                <Form getWeather={this.getWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    humidity={this.state.humidity}
                                    city={this.state.city}
                                    country={this.state.country}
                                    description={this.state.description}
                                    weatherIcon={this.state.weatherIcon}
                                    sunset={this.state.sunset}
                                    sunrise={this.state.sunrise}
                                    speed={this.state.speed}
                                    error={this.state.error}
                                    notFoundCode={this.state.notFoundCode}
                                    notFoundMessage={this.state.notFoundMessage}
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div id='color_toggle5' className='left-col-bg cols-height'>
                                <YMaps>
                                    <div>
                                        <Map state={{
                                            center: [this.state.coord_lat, this.state.coord_lon],
                                            zoom: 9,
                                            controls: ['zoomControl', 'fullscreenControl'],
                                        }} modules={['control.ZoomControl', 'control.FullscreenControl']}
                                             className='ymaps-size'/>
                                    </div>
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
