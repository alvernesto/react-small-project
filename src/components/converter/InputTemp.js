import React, { useState } from 'react';

const InputTemp = (props) => {
    //Hook's 
    const [value, setValue] = useState('');
    const [unit, setUnit] = useState('°C');
    //Functions from Converter.js
    const { getTemperature, toggle, setAlert } = props;
    //Variables from Converter.js
    const { active } = props;


    const onSubmit = (e) => {
        e.preventDefault();
        if (value === '' || unit === '') {
            if (active) {
                toggle();
            }
            setAlert('Please enter a temperature...', 'Light');
        } else if (unit === 'K' && value < 0) {
            if (active) {
                toggle();
            }
            setAlert('Temperature in Kelvin scale not exists. Try again... ', 'Light');
        } else {
            let temp = {
                value: value,
                unit: unit
            }
            getTemperature(temp);
            toggle();
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'temperature') {
            setValue(value);
        } else if (name === 'unit') {
            setUnit(value);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input name='temperature' type="text" placeholder="Ingresa °T | Type °T" onChange={onChange} />
                <select name="unit" onChange={onChange}>
                    <option value="°C">°C</option>
                    <option value="°F">°F</option>
                    <option value="K">K</option>
                </select>
                <button type='submit' className='btn btn-light btn-block'>Calculate</button>
            </form>
        </>
    )
}

export default InputTemp; 
