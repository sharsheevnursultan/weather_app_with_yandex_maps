import React from "react";
import './Form.css'

const Form = props => (
    <div className='centering'>
        <form  onSubmit={props.getWeather}>
            <input className='form-input-name' type="text" name="city" placeholder="Введите имя города"  title="Введите имя города"/>
            <button className='form-input-submit'>
               Найти
            </button>
        </form>
    </div>
);

export default Form;